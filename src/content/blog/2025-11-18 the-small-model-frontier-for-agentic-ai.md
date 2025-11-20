---
title: "The Small Model Frontier for Agentic AI"
description: "Rethinking stacks around small contract driven models instead of one giant default model."
slug: "the-small-model-frontier-for-agentic-ai"
date: 2025-11-18
author: Dean
tags:
  - Agents
  - SLM
  - LLM
---

**We are making an expensive mistake with agentic AI: putting giant models where small ones belong.** Most stacks still assume "bigger is safer," but for many agent tasks, small models are structurally better and cheaper.

Agentic systems use only a thin slice of a models capability surface. Planning, tool calls, routing, JSON shaping, SQL templates, all of it lives inside strict contracts. You are not paying for open ended creativity, you are paying for protocol obedience at scale.

That implies a different architecture:

## Scale out beats scale up for agents

Instead of one frontier "do everything" model, you deploy a fleet of specialists: an SLM for planning, one for tool calling, one per domain, another for formatting. The aggregate behavior of many small experts often beats a single monolith on real workloads.

## In agentic loops, latency and cost do not add, they multiply

If a small model responds in under a second while a frontier model sits in the multi second range, a 20 hop workflow becomes roughly 1-4 seconds vs tens of seconds per request. At the scale of thousands of daily tasks, you are not deciding between "fast" and "slow", you are deciding which workflows are economically possible at all.

## Your moat becomes SLM shaped, not LLM shaped

Small, well trained models increasingly match or beat much larger systems on language, coding, and reasoning in constrained tasks. The key move is to treat your own agent traces (prompts, tool calls, controller decisions, outcomes) as a training set to distill small experts from a frontier teacher, then keep refining them from real traffic. Over time, the big model becomes a rare escalation path, not the default.

## Here is the quiet infra consequence

As more work moves to SLMs, agents can run close to the data on cheaper GPUs or edge devices, with only a narrow slice of "hard" cases escalated to a frontier model in the cloud. The question stops being "cloud vs on prem" and becomes "which steps actually justify leaving the edge."

Strategically, this changes the core question I ask when I design an agent.  
It is no longer "Which frontier model should I wire in by default?"  
It is "For this specific step, what is the smallest model that can satisfy the contract, and when do I need to escalate beyond it?"

If you disagree, you are probably betting that frontier creativity matters more than protocol reliability in the critical path of your workflows.

If we design agents with the opposite bet, "small" stops being a compromise and becomes an operating principle. The real frontier may not be who uses the biggest model, but who can deliver the most outcome with the least model per decision.

Continue the discussion [over on LinkedIn](https://www.linkedin.com/posts/activity-7396610474106290177--KrZ/).