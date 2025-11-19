---
title: "Halving service Diagnostic time with Generative AI"
description: "Accelyze used Anthropic Claude on AWS Bedrock to cut technician diagnostic time in half and reduce service escalations for Yamaha."
slug: "halving-diagnostic-time-with-generative-ai"
date: 2025-11-14
author: Accelyze
client: Yamaha Motors
tags:
  - GenAI
  - Case Study
metrics:
  - label: "Technician diagnostic time"
    value: "↓ 50%"
  - label: "Warranty case resolution time"
    value: "↓ 29%"
  - label: "Dealer service satisfaction"
    value: "↑ 10 pts"
---

## Client

**Yamaha Motor North America** operates a large network of more than 1,500 dealers that sell and service motorcycles, marine engines, power products, and specialty vehicles. The organization runs largely on AWS, with Salesforce Service Cloud for dealer support, SAP for parts and warranty, and a very large corpus of technical manuals and service bulletins stored in Amazon S3. Service quality and brand trust depend on technicians having fast and reliable access to accurate repair procedures and diagnostics for many product families, model years, and regions.

---

## Business problem

Service and support operations were under pressure. Technicians needed to diagnose issues and complete repairs while juggling PDFs, legacy portals, and wikis. Finding the correct procedure or wiring diagram often took more time than the repair itself, which led to inconsistent first time fix rates and unnecessary warranty cost. In parallel, corporate engineering and central support spent a significant portion of their time answering repeat questions that technically already had documented answers.

Previous experiments with generic chatbots did not succeed. Those systems hallucinated torque specs and procedures, could not reliably constrain answers to specific model years or regions, and raised security concerns because data would leave the company VPC. Safety and liability risks made leadership unwilling to expand those pilots.

Yamaha engaged Accelyze with a clear goal: design and ship a production grade generative AI assistant that could answer technician and support questions only from approved documentation, integrate cleanly into the existing AWS and dealer tool stack, and deliver measurable operational impact within six months.

---

## Engagement scope

Accelyze was asked to own end to end delivery of a first production use case, not a lab experiment. The engagement covered four main outcomes:

1. A generative AI assistant for dealer technicians and internal support agents that can handle troubleshooting, repair procedures, and warranty related queries.
2. A retrieval augmented generation (RAG) pipeline on AWS Bedrock that uses Anthropic Claude to reason over Yamaha documentation and tools.
3. A set of governance and guardrail mechanisms that keep answers grounded in approved content and reduce safety or compliance risk.
4. An evaluation and observability framework that links model quality to business metrics such as time to resolution and escalation rates.

The first phase intentionally excluded customer facing experiences. All model usage had to remain within the company AWS environment, and the assistant had to reach a pilot in production within roughly eleven weeks from kickoff.

---

## Approach

### 1. Architecture on AWS Bedrock

Accelyze designed a Bedrock centric architecture with Claude as the primary reasoning engine. Bedrock Knowledge Bases, backed by Amazon OpenSearch and S3, served as the retrieval layer for manuals, service bulletins, diagnostic trees, and known issue repositories. Amazon API Gateway and AWS Lambda provided the core orchestration surface and API endpoints used by both the dealer portal and internal support console. Where longer running workflows were required, for example multi step diagnostic sessions, AWS Step Functions coordinated the flow.

Every call to the assistant followed a consistent pattern. A technician or support agent submitted a natural language question from their existing tools. The request entered the orchestration layer through API Gateway and a Lambda function. The orchestrator queried the Bedrock Knowledge Base with constraint filters such as product line, model year, region, and system. It then called Claude with a carefully designed system prompt, the user query, and the retrieved passages. Responses passed through a post processing layer that enforced safety rules and redaction policies before returning an answer to the user.

### 2. Data and knowledge preparation

The data work was not glamorous, but it was critical. Accelyze began with a content inventory that included roughly 60 000 PDF manuals and bulletins, eight years of anonymized warranty claims and resolutions, and structured diagnostic trees for priority product lines. The team converted PDFs to text while preserving section boundaries and layout where that context mattered, and then normalized product names, model codes, and region codes into a consistent ontology.

For retrieval, Accelyze avoided arbitrary token based chunks. Instead, the pipeline created chunks at the level of procedures, sections, or diagnostic steps. Each chunk carried metadata such as product family, model, year, region, component, and a safety critical flag. Bedrock embedding models generated vector representations that fed into the Knowledge Base backend. The result was a retrieval layer that typically returned a compact set of highly relevant passages, which allowed Claude to focus on reasoning instead of sifting through noise.

### 3. Assistant behavior and tools with Claude

Accelyze defined assistant behavior through a detailed system prompt and a small set of structured tools exposed to Claude via Bedrock. The system prompt instructed the model to quote specific manual sections and revision dates, to refuse to invent torque values, fluid types, or safety steps, and to ask concise clarification questions when the model year or region were ambiguous. For anything marked safety critical, the assistant had to rely on at least two independent corroborating passages before presenting a final answer.

The orchestration layer provided Claude with several tools, such as:

- `get_procedure(product, model_year, system, fault_code)`
- `lookup_torque_spec(part_number)`
- `check_warranty_eligibility(vin, failure_date)`
- `fetch_recent_service_bulletins(model, region)`

Claude used these tools to translate free form technician questions into structured calls, to combine retrieved documentation with tool outputs, and to maintain troubleshooting context across a short session. This design kept business logic and integrations in code, while using the model for interpretation and synthesis.

### 4. Guardrails and governance

Because incorrect guidance can create safety, warranty, and regulatory issues, guardrails were part of the initial design rather than an afterthought. Accelyze implemented grounding checks so that every answer included references to the source documents used. If retrieval confidence dropped below a defined threshold, the system returned a gentle fallback such as a recommendation to escalate to a specific queue, instead of a speculative answer.

On top of that, Bedrock guardrail features were configured to block content that fell outside the intended domain, such as advice unrelated to Yamaha products or instructions that conflicted with safety notices. Logs excluded or masked VINs and customer identifiers, and internal engineering annotations were kept in separate stores so that the assistant exposed only dealer appropriate content.

### 5. Evaluation and observability

Accelyze created both offline and online evaluation loops. Offline, the team partnered with Yamaha support leaders to curate 250 gold test questions drawn from historical tickets, each with a reference answer. Every material change to prompts, retrieval parameters, or model selection ran through this suite and produced scores for accuracy, grounding, and safety.

Online, a random sample of real interactions flowed into an evaluation pipeline. A secondary model scored them for helpfulness and grounding, and Yamaha experts reviewed a subset each week. Key metrics included latency, rate of fallback to manual escalation, coverage of documents over time, and indirect usage signals such as follow up queries and ticket reopen rates.

### 6. Change management and rollout

The rollout was staged. The first pilot included 40 technicians across three high volume dealers plus a central support team. Training was deliberately light: three short remote sessions and embedded walkthrough videos inside the existing tools. Feedback channels were built into the portal, allowing technicians to flag unhelpful answers with a single click. Each week during the pilot, Accelyze and Yamaha iterated on prompts, retrieval filters, and UI details based on that feedback.

---

## Timeline

The project moved from kickoff to first production pilot in approximately eleven weeks.

During weeks 1 and 2 the team focused on discovery and design. Stakeholders jointly mapped core service workflows, documented pain points, and agreed on success metrics and constraints. Accelyze produced a target architecture and ran it through security and compliance review with the cloud platform group. The teams also drafted the initial evaluation set.

Weeks 3 to 5 were dedicated to data pipeline work and standing up the RAG foundation. Manuals and bulletins were ingested, cleaned, normalized, and indexed. The first Bedrock Knowledge Base went live in a non production account, and a skeletal API with a simple retrieval plus answer flow became available for internal testing.

From weeks 6 to 8, attention shifted to assistant behavior, tool integration, and guardrails. Prompts matured, business tools were wired into the orchestration layer, and the first safety policies and grounding checks were enforced in code. The offline evaluation harness started to produce regular quality reports.

Weeks 9 to 11 delivered pilot readiness. Integrations with the dealer portal and internal console were finalized, authentication and access controls were verified, and the pilot group received access. During this period the teams validated observability, tuning, and support processes so that expansion after the pilot would be smooth.

---

## Results after 6 months

Six months after initial launch, the assistant was in regular use across North American service operations for the targeted product families. Technicians used the system in more than 65 percent of repair orders that required diagnostics or non trivial procedures. Level 2 and engineering support tickets for known issue types dropped noticeably, and warranty operations saw more consistent and faster assessments.

Quantitatively, the mean time to identify the correct procedure fell from 14 minutes to 7 minutes. First time fix rate increased from 72 percent to 83 percent for the targeted lines. Warranty case resolution time decreased by 29 percent, and Level 2 escalation rates for covered scenarios dropped by 41 percent. Dealer service satisfaction scores in the initial regions improved by 10 points, which matched feedback that technicians felt less frustrated with documentation and more confident in their guidance.

Within Yamaha, the work also created a repeatable pattern for future gen AI projects: a template architecture on Bedrock, a documented governance approach, and an evaluation framework that tied AI behavior to business outcomes rather than model centric metrics alone.
