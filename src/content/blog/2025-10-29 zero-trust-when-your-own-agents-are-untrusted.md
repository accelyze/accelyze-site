---
title: "Zero trust when your own agents are untrusted"
description: "Why intent level controls, data passports, and policy embedded reasoning are the new core of security in agentic systems."
slug: "zero-trust-when-your-own-agents-are-untrusted"
date: 2025-10-29
author: Dean
tags:
  - Agents
  - Security
  - Governance
---

**Zero trust used to mean no user or device was inherently trusted. Now it means your own agent is not either.**

Autonomous agents invoking APIs, querying CRMs, and fusing internal plus external data dissolve the old security perimeter. Policies built for humans and apps falter when an entity can think, reason, and act across domains.

The challenge is not access control anymore, it is **intent control**. Can your system distinguish *why* data is used, not just *who* uses it?

Example: a procurement agent accesses vendor databases, fetches external pricing, and triggers orders. If it mis identifies a vendors region, routes data through a foreign API, and triggers export compliance or sovereignty rules, the breach is not human hackers. It is autonomous execution slipping through policy gaps.

Agentic workflows break assumptions of static roles and boundaries. One agent calls another, invokes tools, hands off results, sovereignty blurs, the audit trail vanishes.

To adapt, governance must become **policy embedded**, not just perimeter enforced. Each datum should carry its own passport, a metadata layer defining origin, jurisdiction, and permissible uses. Enforcement should shift from firewalls or IAM rules to the agents reasoning layer itself.

Emerging frameworks support the shift: the AI Model Passport concept frames structured metadata for models and data (https://arxiv.org/abs/2506.22358). A recent work proposes agent identity using Decentralized IDs (DIDs) and Verifiable Credentials (VCs) to capture capability, provenance, and behavioural scope (https://arxiv.org/abs/2505.19301).

In the coming wave of agentic automation, sovereignty will not be a compliance checkbox, it will be a **design primitive**. Because if an agent can think, it can also decide, and every decision is a potential boundary crossing.

## 🧩 Mini checklist: is your architecture ready

1. Does each data object carry a passport capturing origin, jurisdiction, permissible uses, and expiry  
2. Does each agent invocation trigger a real time reasoning check: “Is this request consistent with policy plus context plus provenance”  
3. Are agent to agent hand offs auditable with full lineage and flagged when jurisdiction, purpose, or tool invocation changes  
4. Are revocation or transformation rules supported if destination jurisdiction becomes non trusted  
5. Are your agents identified by DIDs and VCs that capture behavioural scope, capability limits, and trust posture, not just “agent A has access to service X”

If any answer is “we rely on IAM plus network controls only”, you are still building yesterdays model.

🧩 How do we teach agents to respect borders that humans barely manage to define?

Continue the discussion [over on LinkedIn](https://www.linkedin.com/posts/activity-7387518268552650752-e4yb/).