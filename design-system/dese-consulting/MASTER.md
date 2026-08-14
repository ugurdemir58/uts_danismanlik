# Dese Consulting — Design System Master

> Generated from UI/UX Pro Max recommendations (B2B Service + Legal/Compliance).
> Stack: HTML/CSS/JS · Domain: www.deseconsulting.com

## Product & Style

| Field | Value |
|-------|--------|
| Product type | B2B regulatory consulting (ÜTS / TİTCK) |
| Primary style | Trust & Authority + Minimal |
| Landing pattern | Hero-centric → Features → FAQ → CTA |
| Audience | Kozmetik, tıbbi cihaz, gıda firmaları |

## Colors

| Token | Hex | Use |
|-------|-----|-----|
| `--primary` | `#0B3A4F` | Brand, headers, footer |
| `--primary-mid` | `#145A73` | Hover / mid surfaces |
| `--accent` | `#FFE600` | Consulting yellow (headings accent, CTA, marks) |
| `--accent-strong` | `#E6CF00` | CTA hover |
| `--accent-muted` | `#C9B400` | Labels / text accents on light backgrounds |
| `--accent-ink` | `#0F172A` | Text on yellow surfaces |
| `--ink` | `#0F172A` | Headings |
| `--text` | `#334155` | Body |
| `--muted` | `#64748B` | Secondary text |
| `--surface` | `#F1F5F9` | Section backgrounds |
| `--white` | `#FFFFFF` | Cards / page |
| `--line` | `#E2E8F0` | Borders |

## Typography

- **Headings:** Lexend (Corporate Trust / readability)
- **Body:** Source Sans 3
- Base 16px, line-height 1.6, heading line-height ~1.15

## Effects & Motion

- Transitions 150–280ms ease
- Scroll reveal (fade + slight translate)
- Hero brand wordmark entrance
- FAQ accordion height animation
- `prefers-reduced-motion: reduce` disables non-essential motion

## Anti-patterns (do not use)

- Emoji as structural icons
- Stats / promo chips in first viewport
- Purple gradients / Inter / system-only stacks
- Cards in hero
- Hover-only interactions without focus styles

## Icon system

Outline SVG (24px, stroke 1.75), single style family throughout.
