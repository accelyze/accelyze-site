# Accelyze Public Site

Accelyze is built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [Preline UI](https://preline.co/), it keeps content in simple Markdown files for easy version-controlled editing.

## Project Structure

Accelyze organizes modular sections, components, content, and layout to streamline development and content management.

```md
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Pages build & deploy pipeline
├── public/                             # Static assets served as-is
│   └── CNAME                           # Custom domain (accelyze.ai)
└── src/
    ├── assets/
    │   ├── images/
    │   └── styles/                     # Global CSS + Tailwind overrides
    ├── components/
    │   ├── common/                     # Shared UI pieces (logo, contact info, etc.)
    │   ├── sections/                   # Page-level sections (hero, nav, footer, etc.)
    │   └── ui/                         # Form controls, buttons, and icons
    ├── content/
    │   └── blog/                       # Blog + case-study content (tagged collections)
    ├── data/                           # Shared data helpers (e.g., constants, metadata)
    ├── layout/
    │   └── BaseLayout.astro            # Global shell + SEO metadata
    ├── pages/
    │   ├── approach/                   # Methodology + industry deep dives
    │   ├── blog/                       # Blog listing + `[id].astro`
    │   ├── case-studies/               # Case-study listing + `[id].astro`
    │   ├── services/                   # Services index + detail pages
    │   ├── 404.astro
    │   ├── about.astro
    │   ├── contact.astro
    │   ├── index.astro
    │   └── robots.txt.ts
    ├── utils/
    │   ├── megaMenu/                   # Services and approach mega menu data
    │   ├── paths.ts                    # Helpers for GitHub Pages base paths
    │   ├── reading-time.ts             # Reading time helper shared by blog + studies
    │   └── utils.ts                    # Common utilities (date formatting, etc.)
    └── content.config.ts               # Content collection schemas
```

## Local preview

```bash
npm run dev
npm run build
npm run preview
```

`preview` serves the static output exactly as GitHub Pages does.

## Content Management

Content lives in the repo, so pull requests capture both copy changes and component updates in one place.

* `src/content/blog` – Markdown files that power both the blog and the case studies. 
* Case studies are simply posts tagged with `"Case Study"`; the `/case-studies` pages filter on that tag.

### Adding a new blog post or case study

1. Write your content in Markdown. You can import components from `src/components` when you need richer layouts or callouts.
2. Drop the new `.md` file in `src/content/blog`. The filename becomes the slug. It is optional, but good practice to mention it in the frontmatter below.
3. Commit the file and the build pipeline will handle the rest.
4. The `/case-studies` page will find client.svg for the logo from `src/assets/images/blog`
5. The author image is author.png from `src/assets/images/blog/authors`
6. Include the below frontmatter (add `metrics`, `client`, `"Case Study"` tag if the entry is a case study):

```md
---
title: "Halving Diagnostic Time with Generative AI"
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
```
