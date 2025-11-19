---
title: "Routing bias the hidden failure mode in agentic AI"
description: "Why routing, tool usage, and decision paths matter more than answer level scores in agentic systems."
slug: "routing-bias-the-hidden-failure-mode-in-agentic-ai"
date: 2025-11-13
author: Dean
tags:
  - Agents
  - Routing
---

Most teams obsess over "model bias".  
The more dangerous bias in agentic systems lives somewhere else.

Your agent can be accurate on evals and still be systematically consulting the wrong evidence in production.

## In agents, bias is a routing problem, not just a weights problem

Once an LLM can choose tools, search corpora, and chain prompts, you have a policy over actions, not just a model.  
That policy can quietly prefer one vector index, one tool, one time window. It is the same failure mode regulators worry about in credit scoring: decisions look fine on paper while the policy drifts into a narrow, unstable groove.

I have seen an agent that passed internal evals with margin to spare, but in production gradually stopped calling the risk check tool on most edge cases. Retrieval was over tuned to "similar past successes", so risky scenarios never looked similar enough to trigger the check. Metrics stayed green. Risk exposure quietly grew.

## Decision drift shows up in the trajectory, not just the answer

If you only score final outputs, you miss that:

- Tool usage collapses to one or two "favorite" tools  
- Retrieval depth shrinks even as tasks get harder  
- Reflection steps get skipped because shortcuts once worked  

A simple example: track a "tool entropy" metric over time.  
If the Shannon entropy of tool usage drops while your use cases diversify, your agent is overfitting to a narrow policy, even if answer level quality looks stable.

## We need tests that diff decisions, not just scores

Think less "single metric leaderboard", more "software testing plus observability":

- Snapshot tests: freeze docs and tools, replay scenarios, and diff tool order, retrieved chunks, and reflection steps  
- Guardrail assertions: treat each agent step like a function with pre and post conditions  
- Behavioral drift monitors: watch distributions over actions, escalation rates, and override frequency, not just accuracy  

If your dashboards only show response quality and latency, you are flying blind on the thing that matters most: how your agents actually behave.

## Governance lives at the level of habits, not heroics

By the time an agent makes an obviously bad call, the drift has usually been visible in traces for weeks. Strong teams wire behavioral tests into CI, monitor action distributions in production, and treat routing policies as first class, versioned artifacts.

Pick one critical workflow, trace ten recent runs, and ask if the tools, retrieval depth, and fallbacks match the policy you believe you have deployed.

If the honest answer is no, has the model really drifted, or have your agents simply learned a different system than the one you think you are running?

Continue the discussion [over on LinkedIn](https://www.linkedin.com/posts/activity-7394803806166958080-XgFR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABiRucB53-ACde3I_iphH8ZWph1YnQ_13s).