---
title: "From Sidecar Copilot to Daily Habit in Logistics"
description: "Accelyze used OpenAI based copilots to help Crowley turn a sidecar analytics project into a core tool that optimizes network performance and analyst productivity."
slug: "sidecar-genai-logistics-crowley"
date: 2025-11-15
author: Accelyze
client: Crowley
tags:
  - GenAI
  - Case Study
  - Logistics
metrics:
  - label: "Lane analysis cycle time"
    value: "↓ 42%"
  - label: "Analyst reporting effort"
    value: "↓ 55%"
  - label: "Unplanned expedites"
    value: "↓ 18%"
---

## Client

**Crowley** is a privately held United States logistics, marine, and energy solutions company with more than a century of operations history. The company provides end to end supply chain services that combine ocean freight, land transportation, warehousing, customs brokerage, and cold chain logistics across the United States, Central America, Puerto Rico, and the Caribbean. Logistics analysts in Crowley work with a mix of tools that include transportation management systems, warehouse management systems, rate engines, spreadsheets, and business intelligence dashboards to keep trade lanes balanced and service commitments on track.

---

## Business problem

Crowley had invested heavily in data and systems, yet analysts still spent much of their week assembling a picture of the network rather than optimizing it. To answer questions such as where are we at risk of missing service levels in the next seven days or which lanes are generating the most margin leakage, analysts needed to pull data from several systems, join them manually, and then explain findings in slide decks and email threads.

This limited how many scenarios the team could evaluate. Trade lanes with smaller volumes or more complex patterns received less attention, and insights often depended on the specific person who had followed that lane for years. Leadership wanted to reduce unplanned expedites and improve asset utilization, but they were wary of black box automation that might inadvertently commit the company to unsafe or operationally impossible plans.

Crowley therefore engaged Accelyze to explore a different pattern. Instead of trying to replace analysts with an automated optimizer, they wanted a sidecar system that sat next to existing workflows, watched the same data that analysts watched, and proposed options with clear reasoning. If that sidecar proved reliable and useful, it could gradually move from experiment to everyday tool.

---

## Engagement scope

Accelyze was asked to design, build, and operationalize an OpenAI powered analytics copilot for Crowley logistics analysts. The scope covered three goals.

First, convert existing data exhaust from the transportation management system, rate databases, and telemetry into a coherent view that a large language model can reason over. Second, design a sidecar workflow where the copilot surfaces risks and scenarios but human analysts retain full control of decisions. Third, measure impact in terms that matter to the business, including cycle time for lane analysis, reduction in unplanned expedites, and analyst capacity released for higher value work.

The engagement explicitly avoided direct write access to operational systems in the initial phase. The OpenAI models would suggest actions, such as adjusting booking patterns or prioritizing specific containers, but the actual changes would be made by analysts through the normal tools that Crowley already trusts.

---

## Approach

### 1. Sidecar architecture with OpenAI

Accelyze implemented a sidecar pattern that kept the core transportation and warehouse systems unchanged. A new analytics service ingested near real time data feeds into a cloud data store that already served Crowley reporting teams. On top of that, Accelyze deployed an orchestration layer that combined SQL based feature queries with OpenAI models that handle natural language reasoning and explanation.

From the analyst perspective, the experience appeared inside tools they already used. In the route profitability dashboard, a small panel labeled Copilot offered a summary such as here are three lanes that show emerging dwell time risk next week along with natural language explanations and linked queries. The sidecar did not book freight, change routes, or modify rates. It produced structured recommendations and narratives that analysts could accept, adjust, or ignore.

The orchestration layer handled all calls to OpenAI. It translated analyst prompts or scheduled checks into structured feature queries, fetched relevant slices of data, and passed them to the model with a system prompt that guided behavior. Responses were captured as suggestions with clear provenance, including the query and timestamp that produced them.

### 2. Data and signals

To make the sidecar useful, Accelyze focused on a concise but rich set of signals instead of trying to mirror every field in every system. The data model combined:

- Shipment and booking data including origin, destination, mode, vessel or truck, planned and actual transit times, and cost components.
- Asset and capacity views that described vessel sailings, container availability, and terminal constraints by port and week.
- Customer and service level commitments, such as contractual transit windows or on time delivery targets.
- Historical disruptions including port congestion events, weather incidents, and strike related slowdowns that affected similar routes.

This data lived in the existing analytics warehouse. New materialized views provided the sidecar with highly curated slices, for example a time window of recent shipments for a lane plus forecasted volume and available sailings. OpenAI never saw raw identifying information. Data was aggregated or pseudonymized before it reached the model, and access controls followed the same patterns used for Crowley internal analytics.

### 3. Analyst copilot interaction

Accelyze defined two primary interaction modes.

The first was on demand analysis. An analyst could highlight a set of lanes or accounts in the dashboard and ask natural language questions such as explain why dwell time has increased over the last two sailings on these lanes or suggest three actionable ways to reduce expedite spend for this customer without breaking transit commitments. The copilot translated that into warehouse queries, retrieved structured results, and used OpenAI to generate explanations, scenarios, and trade offs in plain language with links back to the underlying data.

The second mode was scheduled sidecar monitoring. At configured intervals, the sidecar ran a library of heuristics and statistical checks across the network, then used OpenAI to prioritize and summarize what it found. For example, it might flag a specific service loop where forecast volume plus current bookings implied that containers would roll unless capacity was adjusted. Analysts received a daily digest with sections such as top three emerging risks, lanes where cost per container is drifting, and customers with rising expedite ratio.

In both modes, the copilot produced recommendations as structured objects rather than prose alone. Each suggestion carried machine readable fields such as lane identifiers, expected cost impact, and confidence bands. This allowed Crowley to track outcomes over time and compare the sidecar plan with the actual analyst choices and results.

### 4. Guardrails and governance

Accelyze treated the OpenAI models as reasoning engines, not as authoritative decision makers. The system prompt instructed models to avoid making operational promises that could not be traced back to data. For example, the copilot would not claim a specific vessel slot was available. Instead, it would say bookings on this sailing are close to typical capacity based on the last eight weeks, consider verifying space or moving some volume to the next departure.

All sensitive cost and customer information remained in the warehouse and was aggregated before use. Free form analyst questions were rewritten into parameterized templates, reducing the chance that unexpected inputs would leak information or trigger undesirable behavior. Logged interactions were scrubbed of any remaining identifiers before they were used in evaluation and tuning.

Crowley governance teams received clear documentation about data flows, model usage, and failure modes. The project did not require new classes of sensitive data; it reused what was already used for internal reporting. The main change was how quickly analysts could interrogate that data and explore scenarios.

### 5. Evaluation and adoption

Accelyze and Crowley agreed early on that the success of a sidecar project could not hinge only on model benchmarks. They defined a baseline of analyst workflows and business metrics that included:

- Average time from question to decision for common analysis tasks, such as evaluating a lane for schedule change.
- Number of unplanned expedites that could reasonably have been anticipated with better visibility.
- Hours per week analysts spent on manual report assembly versus scenario exploration.

During the pilot, Accelyze instrumented the copilot to record which suggestions analysts opened, which ones they accepted or acted on, and which ones they dismissed. The team also captured the parallel plan: what the sidecar suggested, what analysts chose to do, and what actually happened. This gave leaders a clear view of where the copilot added value and where it needed refinement.

Adoption was deliberately voluntary at first. Analysts were not required to use the copilot, but those who did quickly found that it saved time on pattern recognition and narration. Within three months, several senior analysts were building their daily routine around the sidecar digest instead of starting from static reports. That behavioral shift was as important as the numerical impact.

---

## Timeline

The engagement moved from idea to a widely used tool in a series of defined phases over roughly twelve weeks to first pilot and six months to broader adoption.

During weeks 1 and 2 Accelyze ran discovery sessions with logistics, network planning, and analytics teams to map decision flows and identify high impact questions. The teams defined success metrics and selected two trade lanes and one key customer segment as the initial focus. A lightweight architecture proposal detailing data flows to OpenAI, security boundaries, and sidecar touch points was reviewed with Crowley technology leadership.

Weeks 3 to 5 focused on data engineering. Existing warehouse schemas were profiled and normalized into views that captured shipments, capacity, and service levels in a way that OpenAI could consume. Accelyze added a small number of derived features such as rolling dwell time statistics and lane level volatility indicators. A simple user interface extension was prototyped inside the current dashboard tool, proving that sidecar summaries could appear where analysts already worked.

Weeks 6 to 8 introduced the first OpenAI based copilot logic. System prompts and few shot examples were tuned to produce concise, structured recommendations rather than verbose essays. The sidecar began to run in strict read only mode, shadowing analyst work without influencing it. Accelyze compared sidecar suggestions with actual analyst decisions and used those differences to refine prompts and heuristics.

Weeks 9 to 12 delivered the true sidecar pilot. A group of analysts on the selected lanes received access to the copilot panel and the daily digest. Training consisted of short sessions and in context examples embedded directly into the dashboards. Feedback loops were built into the interface, allowing analysts to mark suggestions as helpful or not helpful and to request deeper dives where needed.

After the initial twelve week pilot, the project shifted into an expansion phase. The copilot was rolled out to additional lanes and regions, and the daily digest began to influence operations meetings where leaders reviewed network health. Over time, the label sidecar became less literal. The tool was now a standard part of how Crowley analysts prepared for discussions and made trade offs, even though final authority remained with humans.

---

## Results after 6 months

Six months after the pilot launch, the OpenAI powered copilot had moved from side project to essential companion for Crowley logistics analysts in the covered regions. Usage data showed that analysts consulted the copilot in more than 70 percent of network planning sessions on the targeted lanes. The time required to assemble a coherent view of a lane, including recent performance, forecasted volume, and capacity, fell sharply.

Measured against the baseline, the average lane analysis cycle time decreased by about 42 percent. Analysts who previously needed most of a morning to pull data and build slides could now ask the copilot for an explanation and supporting charts in minutes, then spend more of their effort on negotiating trade offs and validating operational feasibility. Internal surveys indicated that analysts felt they were doing more thinking work and less data janitorial work.

Operationally, unplanned expedites on the targeted lanes fell by roughly 18 percent, driven by earlier detection of emerging risk and clearer communication to customers about realistic timelines. The number of ad hoc reports created for internal stakeholders dropped as well, since stakeholders could often reuse the narratives produced by the copilot with minor edits. Estimated analyst time spent on manual report building declined by more than half.

Beyond the numbers, Crowley gained a pattern for introducing AI into operational decision making without leaping directly into full automation. The sidecar architecture, governance model, and evaluation framework created a path to bring OpenAI into other domains such as fuel planning and port operations, with a clear precedent that value comes from augmenting the people who know the network best, not replacing them.

---