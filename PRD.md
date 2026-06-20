# Yotta Website — Product Requirements Document

## 1. Overview

A complete redesign of yotta.com as a modern, high-performance marketing site built on **Vite + React + Three.js + shadcn/ui**.

---

## 2. Business Context

**Company:** Yotta Data Services  
**Positioning:** India's Trusted Sovereign Cloud & AI Infrastructure  
**Tagline:** "The Future is Built on Yotta"  
**Backed by:** Hiranandani Group  

**Core offering:** Full-stack data centers, sovereign cloud (Shakti Cloud), AI infrastructure (Rudra AI Factory), cybersecurity, and media services — all India-operated.

**Key differentiators:**  
- 100% sovereign (India-only data residency)  
- Tier IV hyperscale data centers  
- AI GPU factory with free 50K credits program  
- Compliance-first (ISO 27001, SOC 2, PCI-DSS, etc.)  

---

## 3. Target Audience

| Segment | Pain Points |
|---|---|
| Enterprise CTOs / CIOs | Data sovereignty, compliance, scale |
| AI/ML startups | GPU access, inference cost, latency |
| BFSI / Govt | Regulatory compliance, data residency |
| Media & Broadcast | Rendering power, archive intelligence |
| Security teams | Unified SOC, EDR, threat detection |

---

## 4. Design Direction

### 4.1 Color Palette

| Role | Hex | Usage |
|---|---|---|
| Background Primary | `#020B18` | Main page background |
| Background Surface | `#071526` | Card/section backgrounds |
| Background Card | `#0D1B2E` | Card fill |
| Border | `rgba(148,163,184,0.1)` | Card/divider borders |
| Blue Primary | `#3B82F6` | Buttons, highlights |
| Blue Dark | `#2563EB` | Gradient start |
| Cyan Accent | `#06B6D4` | Gradient end, tech accents |
| Purple AI | `#7C3AED` | AI section backgrounds |
| Pink Accent | `#EC4899` | AI gradient end |
| Gold | `#F59E0B` | Certifications, premium |
| Text Primary | `#F1F5F9` | Headings, body |
| Text Muted | `#94A3B8` | Subtitles, labels |

**Primary Gradient:** `linear-gradient(135deg, #2563EB → #06B6D4)`  
**AI Gradient:** `linear-gradient(135deg, #7C3AED → #EC4899)`  

### 4.2 Typography

- **Font family:** Inter (body/UI), Space Grotesk (display headings)
- **Scale:** 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72px
- **Weight:** 400 (body), 500 (labels), 600 (subheadings), 700 (headings), 800 (hero)

### 4.3 Motion & 3D

- **Hero:** Full Three.js particle globe — 3000 particles on a sphere surface using Fibonacci distribution, blue/cyan coloring, 3 glowing India data center nodes with connecting lines, slow Y-axis rotation, mouse parallax
- **Entrance animations:** Framer Motion fade-up on scroll for each section
- **Micro-interactions:** Card hover lift + border glow, button shimmer, stat counter roll-up
- **Pulse animations:** Data center nodes pulse continuously
- **Ticker:** Partner logo horizontal scroll

### 4.4 Visual Style

- **Dark space theme** — deep navy backgrounds
- **Glassmorphism** — `backdrop-filter: blur(16px)` on navbar and cards
- **Grid texture** — subtle dot-grid pattern on hero background
- **Gradient text** — `background-clip: text` for headline emphasis
- **Neon glow** — `box-shadow` based glows on key interactive elements

---

## 5. Page Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navbar** | Fixed glassmorphism nav: logo, links, CTA |
| 2 | **Hero** | Three.js globe, headline, subtext, dual CTA, quick stats |
| 3 | **Trust Bar** | Partner + certification logo strip |
| 4 | **Products** | 8-card grid of all Yotta products |
| 5 | **AI Factory** | Spotlight on Rudra / Shakti Cloud AI Factory |
| 6 | **Data Centers** | India map with 3 DC locations |
| 7 | **Stats** | Animated counters (DCs, clients, uptime, capacity) |
| 8 | **Testimonials** | 3 customer quotes with logo/name |
| 9 | **Why Yotta** | 6 differentiator pillars |
| 10 | **Leadership** | Key leadership grid (3 founders) |
| 11 | **Partners** | Scrolling tech partner logos |
| 12 | **CTA** | Final conversion section |
| 13 | **Footer** | 4-column footer |

---

## 6. Tech Stack

| Layer | Choice |
|---|---|
| Build tool | Vite 5 |
| Framework | React 18 |
| 3D | Three.js (raw, via useEffect) |
| UI Components | shadcn/ui (manual, Radix primitives) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Inter + Space Grotesk) |

---

## 7. Performance Targets

- LCP < 2.5s on 3G
- Three.js canvas: max 2 device pixel ratio, particle count capped at 2000 on mobile
- Lazy-load all sections below the fold
- Font loading: `font-display: swap`
