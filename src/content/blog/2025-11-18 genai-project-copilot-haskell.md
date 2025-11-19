---
title: "From Fragmented Project Data to Focused Standups"
description: "Accelyze used a custom OpenAI and RAG copilot to help Haskell project managers keep subcontractors and subprojects aligned and run higher value standups and review meetings."
slug: "genai-project-copilot-haskell"
date: 2025-11-18
author: Accelyze
client: Haskell
tags:
  - Case Study
  - Construction
  - RAG
metrics:
  - label: "Standup prep time"
    value: "↓ 60%"
  - label: "Issues surfaced before escalation"
    value: "↑ 35%"
  - label: "Rework from missed dependencies"
    value: "↓ 22%"
---

## Client

Haskell is a global architecture, engineering, construction, and consulting firm headquartered in Jacksonville, Florida, known for integrated design build delivery and complex capital projects across manufacturing, infrastructure, commercial, and public sectors. With thousands of in house professionals and a large network of subcontractors and specialty trades, Haskell runs many concurrent projects that combine multiple disciplines, phases, and delivery partners. Project managers sit at the center of this web, responsible for schedule, budget, safety, and coordination across owners, designers, and trade partners. 

## Business problem

On complex design build programs, Haskell project managers lived in a constant flood of information. Schedules lived in Primavera and Microsoft Project. RFIs, submittals, and change orders flowed through project management platforms and shared drives. Safety reports, daily logs, and progress photos arrived through separate tools. Email threads and chat channels carried critical decisions and clarifications. Each subcontractor used slightly different naming conventions and document habits.

To prepare for daily standups and weekly coordination meetings, project managers spent hours hunting through these systems. They tried to answer questions such as what changed since yesterday on the structural steel package, which RFIs are blocking electrical rough in on level three, and what are the top three risks that could move the substantial completion date on this phase. They also needed to create short summaries for monthly owner meetings that explained where the project stood, where risks were emerging, and which decisions were needed next.

Existing reporting tools provided static dashboards and status lists but did not help project managers synthesize across documents, disciplines, and trades. Leadership wanted better visibility and more consistent meeting quality, but they did not want to replace proven systems or force every subcontractor into a single new platform. The idea of a generative AI copilot emerged as a sidecar experiment that could sit on top of that messy reality and help project managers stay ahead.

## Engagement scope

Accelyze was engaged to design and implement a project management copilot that used OpenAI models and a custom retrieval augmented generation architecture. The copilot would ingest and index project data from existing tools, then generate concise, structured summaries for daily standups, weekly coordination meetings, and monthly steering sessions.

The scope of work covered three outcomes.

First, build a data collection and normalization layer that could ingest RFIs, submittals, change orders, schedules, daily reports, and meeting minutes from multiple systems and contractors, without forcing large process changes. Second, design a custom RAG stack that allowed the copilot to reason over heterogeneous document types and versions while respecting permissions and project boundaries. Third, embed the copilot into the way project managers ran their days, so that it became a natural part of preparation and follow up rather than an extra dashboard to remember.

The initial phase focused on a small set of active projects in manufacturing and healthcare markets. The copilot would start as a sidecar inside existing project workspaces. Project managers could use it to prepare for meetings and answer questions, but it would not update source systems directly.

## Approach

### 1. Data collection and normalization

Accelyze started by mapping how information flowed on real projects. For each pilot project, the team cataloged where RFIs, submittals, field observations, quality punch items, safety notices, and change orders actually lived. Connectors and export jobs pulled data from project management platforms, document control systems, email, and shared drives into a cloud data lake that mirrored Haskell security boundaries.

Rather than trying to standardize everything at once, Accelyze defined a pragmatic set of canonical entities such as issue, decision, risk, dependency, and milestone. Parsing pipelines used a mix of rules and OpenAI models to classify incoming documents into these entities, extract key fields such as dates, locations, trade, and status, and attach them to the relevant work breakdown structure items and schedule activities.

For example, an RFI email thread and its formal response were merged into a single issue record with attributes like discipline, location, related drawing numbers, and current impact. A change order proposal was linked to the same underlying issue and tagged with potential cost and schedule effects. Daily reports and photos were associated with location and trade, providing a running narrative of what actually happened on site.

This normalization work created a graph of project facts that could be queried in structured ways and then exposed to the language model as context.

### 2. Custom RAG architecture across document types

With a coherent data backbone in place, Accelyze designed a RAG architecture tailored for construction projects. The system combined two retrieval approaches.

The first was structured search. Queries about a project were translated into SQL and graph queries that pulled timelines, open items, and relationships from the normalized entities. This covered questions such as show all open RFIs that block critical path activities in the next two weeks or list risks that mention weather and affect exterior envelope work.

The second was semantic search. Accelyze indexed unstructured documents such as meeting minutes, specifications, contracts, and narrative daily logs using OpenAI embeddings, chunked by logical sections like agenda items, spec sections, and individual log entries. Each chunk carried rich metadata including project, trade, location, and dates.

When a project manager asked the copilot to prepare for a weekly coordination meeting, the orchestration layer ran structured queries to get the latest set of open issues, upcoming milestones, and recent changes, and semantic queries to retrieve the most relevant narrative snippets explaining why those items mattered. The RAG pipeline then assembled a focused context package and passed it to the model with prompts tuned for meeting preparation.

The system respected project level security. Indexes were partitioned by project and role, and the orchestrator only assembled context from data that the current user could already see in source systems.

### 3. Meeting copilot workflows

Accelyze did not present the copilot as a general chat bot. Instead, it shipped a set of concrete workflows that fit into the way Haskell already managed projects.

For daily standups, project managers clicked a Prepare standup button in the project workspace. The copilot generated a one page summary covering what changed since the last standup, items that need attention today, and a short list of blockers and dependencies by trade. Each bullet linked back to the underlying RFIs, change orders, or schedule tasks so that the project manager could open details in the existing tools. The output followed a consistent structure that matched Haskell standard meeting agendas.

For weekly coordination meetings, the copilot produced a deeper briefing pack. It grouped items by trade and phase, highlighted schedule slippage and its drivers, and suggested questions to ask each subcontractor. For example, it might note that multiple RFIs from the electrical subcontractor had sat unanswered for seven days on level three and propose a specific discussion topic.

For monthly owner meetings, the copilot created a narrative summary of progress over the period, organized by major scope areas and key risks. It linked quantitative status (percent complete, float consumption, contingency usage) with qualitative context drawn from meeting minutes and daily reports.

Project managers could edit these outputs, add commentary, and export them to decks or PDFs. Over time, many managers stopped building status narratives from scratch and instead started with the copilot draft.

### 4. Guardrails and governance

Given the contractual and safety implications of project information, Accelyze put strong guardrails around the system. The model configuration emphasized summarization and cross referencing rather than original invention. System prompts instructed the model to quote source documents and to clearly mark any inferred statements as interpretation.

The copilot did not create or change official records. RFIs, submittals, and change orders remained in the source systems of record. The copilot pointed to them and rephrased them, but the outputs were treated as notes and drafts. Legal and risk teams reviewed the prompts and patterns to confirm that the tool did not generate new commitments or contradict contract language.

Personally identifying information was minimized in the context passed to the model. Names and emails were reduced to roles when possible, such as electrical foreman or owner representative. Logs captured enough data to troubleshoot and improve the system but were scrubbed of sensitive details.

### 5. Evaluation and adoption

Accelyze and Haskell did not rely on subjective impressions alone. They established baseline measurements for how long project managers spent preparing for standups and review meetings, how many issues surfaced late in the process that could have been visible earlier, and how often meetings drifted into status recitation instead of decisions.

Instrumentation in the copilot tracked how often project managers generated summaries, which sections they edited, and which links they clicked through to source systems. After each month, a short survey asked project managers how useful the copilot had been in making meetings clearer and shorter.

Adoption was voluntary at first, framed explicitly as a sidecar. During the first few weeks, only a handful of pilot projects used it, mainly where the project manager had a personal interest in technology. As the summaries improved and managers realized how much preparation time they could save, use spread to other projects and markets through internal word of mouth rather than a top down mandate.

## Timeline

The journey from first workshop to general availability on selected projects unfolded over roughly twelve weeks for initial pilots and six months to broader adoption.

In weeks 1 and 2, Accelyze led discovery sessions with project managers, superintendents, and project engineers to map the flow of RFIs, submittals, change orders, and daily reporting. The teams selected two active projects, one manufacturing facility and one healthcare project, to serve as pilot environments. Success metrics and a clear boundary were agreed, including that the copilot would have read only access and would not change official project records.

Weeks 3 to 5 focused on data connections and normalization. Integrations to project management and document control platforms were configured, export jobs were tuned, and the first parsing pipelines turned documents into unified issue and risk entities. Internal champions validated that the system was finding the same information they would otherwise search for manually.

Weeks 6 to 8 introduced the RAG layer and the first meeting workflows. The copilot could generate draft standup and weekly coordination summaries for the pilot projects, with project managers comparing these drafts to their manually prepared notes. Feedback loops allowed them to flag missing or misleading items, which Accelyze used to refine prompts, retrieval filters, and parsers.

Weeks 9 to 12 delivered a formal pilot. Project managers on the selected projects were encouraged to use the copilot for real meetings, with the expectation that they would still verify outputs. Observability dashboards showed how often the tool was used and where it saved time. By the end of this period, leadership saw enough evidence to expand to more projects and begin planning for a standard rollout pattern.

Over the next several months, the copilot became a regular presence in project workspaces. The phrase check what the copilot says entered informal conversations among project managers before important meetings.

## Results after 6 months

Six months after the initial pilot, the project management copilot had evolved from an experimental sidecar into a standard part of how Haskell prepared for and ran meetings on many complex projects.

On the pilot and early adopter projects, project managers reported that standup preparation time fell by about 60 percent. Instead of spending an hour or more the evening before compiling notes, they could generate a summary in minutes and use their time to think about trade offs and negotiation points. Weekly coordination meetings shifted from status read outs to discussions of specific risks and decisions, since the copilot summary made the facts easier to see.

Quantitatively, Haskell observed that issues classified as avoidable late discoveries dropped as more potential conflicts surfaced in daily or weekly summaries. Across the targeted projects, the number of issues caught before they affected critical path increased by roughly 35 percent. Rework attributable to missed dependencies and misaligned trades on those projects declined by about 22 percent.

Qualitative feedback from project managers and superintendents indicated that meetings felt more focused and less repetitive. Stakeholders appreciated seeing clear, consistent narratives that tied RFIs, change orders, and schedule impacts into a single story, rather than flipping between multiple reports.

Perhaps most importantly, Haskell gained a reusable pattern for augmenting project teams with AI without forcing radical process change. The data collection and RAG architecture, combined with careful guardrails and an emphasis on human control, created a platform for additional use cases such as closeout documentation summaries and cross project lessons learned, all while keeping certainty of outcome at the center.

---