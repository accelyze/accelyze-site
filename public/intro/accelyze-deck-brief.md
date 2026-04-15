# Accelyze First Call Deck — Production Brief

## Files

| File | Description |
|---|---|
| `accelyze-fcd.html` | Animated version with enhanced CSS effects (see Aesthetic Direction below) |

## Assets (all files are in the `accelyze-fcd` folder)

| File | Usage |
|---|---|
| `Accelyze.png` | Light-background logo (icon + wordmark). Use on light slides. |
| `Accelyze-dark.png` | Dark-background logo (icon + wordmark). Use on dark slides. |
| `accelyze-icon.png` | Icon only. Use as decorative accent on section dividers, slide corners, or backgrounds at low opacity. Or you can blow up and use as stylistic background at low opacity.|
| `logo-yamaha.svg` | Yamaha Motors client logo |
| `logo-haskell.svg` | Haskell client logo |
| `logo-crowley.svg` | Crowley client logo |
| `apn.png` | AWS Partner Network logo

---

## Brand

### Colors
| Role | Value |
|---|---|
| Accent Blue | `#0062ff` |
| Accent Purple | `#9c00ff` |
| Subtle text / secondary | `#a0a0a0` |
| Card / surface | `#0d0d0d` or `#111111` |

**Gradient:** Use `linear-gradient(135deg, #0062ff, #9c00ff)` for accent bars, highlights, and key callouts. Use sparingly — it should feel like a signal, not wallpaper.

### Typography
- **Font:** Strong font. You can also use cursive if it fit the tone.
- **Headings:**  Bold
- **Body / subtext:**  Light or Regular
- **Metric callouts:**  Bold, very large, gradient fill

### Aesthetic Direction - **FINAL STYLE CHOICE: Light Pastel (Style H)**
**Background:** Soft pastel gray `#f2f0ed` with white card surfaces (`#ffffff`)
**Text colors:** Dark gray primary `#1a1a1a`, gray secondary `#5a5a5a` (inverted from original dark theme)
**Logo:** Large size `clamp(3rem, 4.5vw, 4rem)` — significantly larger than default
**Typography:** Cormorant Garamond (elegant serif, weight 700) for headings with italic styling on accent words, Plus Jakarta Sans for body text

**Animated Version (accelyze-first-call-animated.html):**
- Enhanced CSS animations: floating background circles, gradient shifts on borders/progress bar, hover effects on cards/metrics/buttons/logos
- Parallax mouse tracking for decorative elements
- Staggered reveal animations on slide enter (opacity + translate)
- All original content and layout preserved from source file
- Additional spacing adjustments:
  - Case study sections: 1.5rem gap above Challenge/Solution labels, 1.5rem padding above tech pills
  - Metric boxes: increased vertical padding (1.2rem top/bottom) for better proportions
- "What We Do" slide: decorative rings removed, content layout simplified
- Title: two lines on "What We Do" ("We turn engineering experiments" / "into production systems.") with max-width 28ch

Original direction: Dark, confident, enterprise-grade. Think: premium SaaS meets top-tier consulting firm.
- NOT playful, NOT startup-cute, NOT generic purple-gradient-on-white AI slop
- Plenty of breathing room (generous whitespace)
- Metrics should feel monumental — big numbers, gradient text, centered
- Client logos should look respected, not crammed
- The Accelyze icon (`accelyze-icon.png`) can be used at very low opacity (5–10%) as a large background watermark on section dividers
- Subtle geometric line accents are welcome (thin `#0062ff` lines, partial borders)
- use animations as much as possible as that looks polished on an html site

**Style Evolution:**
- Iterated through 8 style options (A-H) to find the right aesthetic
- Final choice: Style H with light pastel background and larger logo
- Maintains the single-column layout with metric cards structure from earlier iterations
- Incorporates elegant cursive/italic serif fonts as requested

---

## Slide Content

### Slide 1 — Title

**Headline:** AI that Ships.

**Subhead:** Generative AI & Agentic Solutions for the Enterprise

**Body (small, lower third):**
Accelyze helps enterprises move from AI experiments to production systems that reduce costs, accelerate growth, and create competitive advantage — with security and compliance built in.

**Visual:** Full dark background. `Accelyze.png` logo top-left or centered. Gradient accent bar or line at bottom. Tagline in large Bold white.

**CTA text (bottom):** hello@accelyze.ai · accelyze.ai · 1 (949) 346-3889

---

### Slide 2 — The Problem

**Headline:** Most AI projects never leave the lab.

**Body:**
Enterprises are running dozens of GenAI experiments. Few make it to production. The reasons are always the same:

- Unclear ROI and no defined success metrics
- Integration complexity with existing systems
- Deployment risk no one wants to own
- No operational plan for what happens after launch

**Pull quote (large, accent color):**
"The challenge isn't technology — it's creating solutions people actually use, that drive measurable outcomes, and that work reliably at scale."

---

### Slide 3 — The Solution

**Headline:** We close the gap between pilot and production.

**Subhead:** Accelyze is an AI consulting firm built by leaders from Amazon and Google. We design, build, deploy, and operate GenAI systems — all the way to production.

**Three columns (icon + label + one-liner):**

1. **Outcome Driven** — We tie every engagement to business metrics: cost reduction, efficiency, or revenue. Not model accuracy.

2. **Enterprise Tested** — Built by former Amazon and Google leaders who have deployed AI at scale in real-world environments.

3. **Safety Ready** — Designed for regulated and high-risk industries. Security, compliance, and operational controls are part of the design, not an afterthought.

**Visual:** Logo centered or top. Three clean cards on dark surface.

---

### Slide 4 — Services

**Headline:** Four services. One goal: AI that ships.

**Four service cards (2x2 grid or horizontal strip):**

**1. GenAI Strategy & Readiness** *(4–6 weeks)*
Identify high-ROI use cases, align executives, and build an actionable roadmap with clear success metrics. Deliverable: business case + prioritized initiative portfolio.

**2. Pilot to Production Delivery** *(8–12 weeks)*
Take a validated pilot through full integration, hardening, and launch. We own the production plan from day one. Deliverable: live system + performance dashboard.

**3. MLOps & Platform Enablement** *(8–12 weeks)*
Build shared GenAI infrastructure that reduces development time by 60–80%. Reusable components, automated testing, monitoring, and compliance workflows. Deliverable: enterprise GenAI platform + component library.

**4. GenAI Risk & Governance** *(6–10 weeks)*
Design evaluation frameworks, guardrails, and compliance documentation that regulators and boards will trust. Deliverable: governance framework + automated monitoring.


---

### Slide 5 — How We Work (Methodology)

**Headline:** Discover. Design. Deliver. Operate.

**Four steps in a horizontal flow (connected by line or arrow):** Animate to show motion

**Discover**
Align on the business problem, value hypothesis, success metrics, and constraints (compliance, latency, integration). Leave with a shared brief and a quantitative definition of success.

**Design**
Architect the full solution: user journey, model + retrieval strategy, data pipelines, security posture, and human-in-the-loop workflows. Zero surprises for security and platform teams.

**Deliver**
Ship production-grade software on your infrastructure. Monitoring, evaluation harnesses, safety controls, automated tests. Every sprint produces tangible artifacts, not slides.

**Operate**
Support launch, run readiness drills, transfer ownership. Track business KPIs. Run structured improvement loops across prompts, retrieval, and product flows.

**Visual note:** The four steps should feel like a tight, confident process — not a consulting framework waterfall. Use accent color for the connectors. Consider using the gradient on the active/focus step.


---

### Slide 6 — What We Build (Capabilities)

**Headline:** The full stack of enterprise AI.

**Six capability tiles (2x3 or 3x2 grid):**

1. **Intelligent Automation** — Context-aware AI that automates complex workflows. Boosts productivity without breaking existing processes.
   *Models: OpenAI · Gemini · Claude · Llama · Mistral*

2. **Knowledge & Insight** — Make all your data instantly searchable and actionable through natural conversation.
   *Stack: Pinecone · Weaviate · Chroma · FAISS*

3. **Autonomous Agents** — AI agents that make decisions, take action, and coordinate complex workflows across teams and systems.
   *Frameworks: LangGraph · CrewAI · AutoGen · AgentCore*

4. **Scalable AI Platform** — Enterprise-grade infrastructure that grows with your business and delivers consistent performance at scale.
   *Stack: Kubernetes · AWS Bedrock · AWS SageMaker · MLflow*

5. **Trustworthy AI** — Fair, accurate, secure decisions with regulatory compliance and full auditability.
   *Stack: Guardrails · Constitutional AI · Privacy Tech · Audit Frameworks*

6. **Seamless Integration** — Connect AI to your existing tools and workflows without disrupting operations.
   *Protocols: MCP · A2A · REST · GraphQL · Event Hubs · RPA*


---

### Slide 7 — Client Results (Social Proof)

**Headline:** AI in production. Results that matter.

**Layout:** Three client proof blocks, each with logo + metric strip + one-line description.

---

**[logo-yamaha.svg] Yamaha Motor North America**

| Metric | Result |
|---|---|
| Technician diagnostic time | ↓ 50% |
| Warranty case resolution | ↓ 29% |
| Dealer service satisfaction | ↑ 10 pts |

*Built a production RAG assistant on AWS Bedrock with Claude that answers technician and warranty questions from 60,000+ approved documents. Live in 11 weeks.*

---

**[logo-haskell.svg] Haskell**

| Metric | Result |
|---|---|
| Standup prep time | ↓ 60% |
| Issues surfaced before escalation | ↑ 35% |
| Rework from missed dependencies | ↓ 22% |

*Built a GenAI project management copilot using OpenAI + RAG that synthesizes RFIs, submittals, schedules, and daily reports into focused meeting briefs.*

---

**[logo-crowley.svg] Crowley**

| Metric | Result |
|---|---|
| Lane analysis cycle time | ↓ 42% |
| Analyst reporting effort | ↓ 55% |
| Unplanned expedites | ↓ 18% |

*Built an OpenAI-powered logistics sidecar that surfaces network risks and lane analysis in plain language — embedded directly into existing analyst dashboards.*

---

**Visual note:** This is the money slide. Metrics should be the largest visual element — huge numbers in gradient text. Logos should be clearly visible but not crowded. Dark card surfaces per client.

---

### Slide 8 — Why Accelyze (Differentiation)

**Headline:** There are many firms that can run workshops. Fewer that will stand behind a production deployment.

**Four differentiators (left-aligned, minimal):**

**We only take projects that can ship.**
Our first conversation is often about what NOT to build. If there isn't a viable path to production and value, we'll say so.

**Hands-on leaders from day one.**
Your project is led by practitioners who have shipped large-scale AI systems at Amazon and Google — not by a rotating bench of generalists.

**Opinionated about MLOps and safety.**
We bring a clear point of view on architecture, evaluation, and risk. This speeds up decisions and reduces rework.

**Focused on regulated and complex domains.**
Healthcare, finance, and services have real constraints. We design AI that respects regulation, privacy, and controls.

**Visual:** Clean, left-aligned, generous whitespace. Consider a thin accent-color vertical rule on the left edge of each differentiator. No icons needed — the copy carries it.


---

### Slide 9 — AWS Partnership

**Headline:** AWS-Recommended for GenAI Production Readiness.

**Body:**
Accelyze is an AWS partner. We help AWS customers deploy secure, production-grade GenAI workloads with clear ROI, deep integration, and enterprise governance.

**Three columns:**

- **No-cost assessment** available for qualified AWS customer opportunities
- **Bedrock-native** architecture with Claude, GPT, Nova, and other foundation models
- **AWS best practices** baked in: security, IAM, VPC, observability

**Small note (bottom):** AWS Partner Network logo placement here.

---

### Slide 10 — Close / CTA

**Headline:** Ready for AI that ships?

**Body:**
If you're past the pilot phase and want a production launch plan, we should talk. A short discovery call is usually enough to assess feasibility and scope a first project.

**Two options (clear, actionable):**

1. **Schedule a discovery call** → accelyze.ai/contact
2. **No-cost assessment** (for qualified AWS opportunities)

**Contact block:**
- hello@accelyze.ai
- 1 (949) 346-3889
- Los Angeles / Denver
- accelyze.ai

**Visual:** Full dark slide. `Accelyze.png` centered or top. Gradient accent element (bar, line, or glow). The icon (`accelyze-icon.png`) at low opacity as a large background watermark.



---

## Questions Answered Upfront

**Q: What is the primary CTA?**
Schedule a discovery call at accelyze.ai/contact.

**Q: Who is the ICP?**
Executives and senior leaders (VP+, C-suite) at mid-to-large enterprises — especially in logistics, healthcare, financial services, manufacturing, and engineering/construction. They have approved or are evaluating GenAI budgets. They've likely run pilots that stalled.

**Q: What's the one thing this deck must communicate?**
Accelyze is the firm you call when you're done experimenting and need AI that actually ships.

**Q: Is there a secondary audience?**
Sometimes the deck is shown to a Chief of Staff or a Director of AI/Digital before the exec meeting. The metrics and case studies carry that audience; the differentiators carry the exec.

**Q: Should this feel like a traditional consulting deck?**
No. It should feel like a premium product company that also does services. Confident, clean, a little bit audacious.

---

## Creating the Animated Version

To create `accelyze-first-call-animated.html` from the source `accelyze-first-call.html`:

1. **Copy the source files** — Copy all files from the brief into the animated version
2. **Update fonts** — Add Cormorant Garamond alongside Plus Jakarta Sans:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet"/>
   ```
3. **Update CSS variables** — Change colors and add font variables:
   ```css
   :root {
     --bg:      #f2f0ed;
     --card:    #ffffff;
     --ink:     #1a1a1a;
     --dim:     #5a5a5a;
     --muted:   rgba(26,26,26,0.32);
     --rule:    rgba(26,26,26,0.08);
     --blue:    #0062ff;
     --purple:  #9c00ff;
     --font-heading: 'Cormorant Garamond', serif;
     --font-body:    'Plus Jakarta Sans', sans-serif;
   }
   ```
4. **Add animations** — Include keyframe animations (float1, float2, gradientShift, pulseRing) and enhanced hover effects
5. **Apply fonts to headings** — Add `font-family: var(--font-heading);` and `font-style: italic;` to accent words in headings
6. **Adjust spacing** — Increase gaps on case study slides and metric box padding
7. **Remove decorative elements** — Remove rings on "What We Do" slide (simplify to full-width layout)

**Enhanced Animations to Add:**
- Floating background circles (`.bg-c1`, `.bg-c2`) with `float1` and `float2` keyframes
- Gradient shift on card borders, dividers, and progress bar
- Staggered reveal classes (`.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`, `.reveal-fade`) with delays (`.d1`-`.d9`)
- Parallax mouse tracking in JavaScript for decorative elements
- Hover effects on cards, metrics, pills, and logos (transform, box-shadow, color transitions)
