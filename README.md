# 🍵 Matcha Horikku

A premium, responsive matcha-themed e-commerce website with an artistic brand identity, interactive product browsing, event booking, and a modern design system.

## Features

- **Hero Section** — Custom SVG illustration with animated dashed-line flow connecting a matcha plant, matcha-filled brand typography, and an iced cup
- **Responsive Sidebar** — Icon rail on desktop, hamburger overlay on mobile/tablet (breakpoint: 1025px)
- **Product Catalog** — Browse matcha products with detailed product pages
- **Shopping Cart** — Global cart state via React Context with live item count badge in the header
- **Event Booking** — View upcoming matcha events with reservation modals
- **Sign In Page** — Styled with Tailwind CSS utility classes and MUI form components
- **Targeted Audience Section** — Scattered polaroid-style photo gallery with hover animations
- **Catering Section** — Dedicated section for catering services
- **Scroll to Top** — Automatic scroll restoration on route changes
- **TypeScript** — Full TSX migration with strict type checking

## Tech Stack

- **React 19** with TypeScript (TSX)
- **Vite 8** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling (Sign In page)
- **Material UI v9** — Component library (Buttons, TextFields, Icons)
- **React Router v7** — Client-side routing
- **FontAwesome** — Icon library
- **CSS** — Custom stylesheets for most components (glassmorphism, animations)

## Project Structure

```
src/
├── App/              # Root layout, routing, sidebar state
├── Auth/             # Sign In page (Tailwind)
├── Cart/             # Shopping cart
├── Events/           # Events listing & EventCard
├── Footer/           # Site footer
├── Home/
│   ├── Header/       # Navigation header with cart badge
│   ├── Sidebar/      # Responsive sidebar (icon rail / overlay)
│   ├── WelcomeSection/ # Hero section with DashArt SVG illustration
│   ├── Generalinfo/  # Matcha benefits cards
│   ├── TargetedAudience/ # Scattered polaroid photo section
│   ├── TopProducts/  # Featured products
│   └── CategringSection/ # Catering services
├── OurStory/         # Brand story page
├── ProductDetail/    # Individual product view
├── Products/         # Full product catalog
├── assets/           # Images & asset index
├── components/       # Reusable components (PrimaryButton, ProductCard, ScrollToTop)
└── context/          # CartContext (global state)
```

## Installation

```bash
git clone https://github.com/hadiafyouni/matcha-web.git
cd matcha-horikku
npm install
npm run dev
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary Green | `#2c4c3b` | Buttons, links, accents |
| Dark Green | `#1a3a24` | Hover states, headings |
| Light Green | `#f0fdf4` | Backgrounds |
| Breakpoint (Desktop) | `1026px` | Sidebar icon rail trigger |
| Breakpoint (Mobile) | `1025px` | Hamburger menu trigger |