# Sanduni Gamage — Portfolio

A warm, elegant single-page developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Translated from the Figma design.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy lives in one place — [`lib/data.ts`](lib/data.ts):

- **`profile`** — your name, initials, role, email, résumé link, and social links
- **`hero`** — headline (wrap a word in `*asterisks*` to make it italic accent) and intro
- **`about`** — bio heading, paragraphs, and the categorized toolkit chips
- **`projects`** — the project cards (title, description, tags, link, and banner gradient)

## Design tokens

The warm palette and typography are defined in [`tailwind.config.ts`](tailwind.config.ts):

| Token | Hex | Use |
| --- | --- | --- |
| `cream` | `#F6F1E9` | Page background |
| `surface` | `#FCF9F4` | Cards / chips |
| `ink` | `#2A2320` | Primary text |
| `secondary` | `#6B5D50` | Body text |
| `muted` | `#9A8B7C` | Meta text |
| `accent` | `#B75E3F` | Terracotta accent |
| `line` | `#E4D9CA` | Borders |

Fonts: **Fraunces** (serif headings) + **Inter** (sans body), loaded via `next/font`.

## Structure

```
app/
  layout.tsx      # fonts + metadata
  page.tsx        # composes the sections
  globals.css     # Tailwind + base styles
components/
  Nav.tsx  Hero.tsx  About.tsx  Projects.tsx  Contact.tsx  icons.tsx
lib/
  data.ts         # ← edit your content here
```

## Replacing the avatar

The hero shows your initials in a circle. To use a photo, swap the initials
`<span>` in [`components/Hero.tsx`](components/Hero.tsx) for a `next/image`.
