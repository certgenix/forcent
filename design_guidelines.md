# ForceNT Design Guidelines

## Design System Overview
**Approach:** Reference-based (Clean SaaS aesthetic inspired by Linear, Stripe) with strict brand gradient usage for logo, primary CTAs, and floating widget only.

## Color Palette

**Brand Gradient (Limited Use Only):**
- Cyan to Purple: `#00BFFF → #2563EB → #7A5BFF`
- Usage: Logo, Primary CTA buttons, Floating AI widget, Chat send button ONLY
- Everywhere else: Clean, minimal color usage

**Core Colors:**
- Navy `#0F1B3D`: Headings, primary text
- Blue `#2563EB`: Links, accents, icons (solid, no gradient)
- White `#FFFFFF`: Primary backgrounds, cards
- Text Dark `#1F2937`: Body copy
- Text Medium `#6B7280`: Supporting text
- Border `#E5E7EB`: Dividers, card borders
- Background `#F9FAFB`: Alternating sections
- Success Green `#10B981`: Checkmarks

**Section Backgrounds (Alternating):**
- White: Hero, Solution, How It Works, Final CTA
- Light Gray `#F9FAFB`: Problem, Three Pillars, Investment

## Typography

**Font:** Inter (via Google Fonts)
**Sizes (Desktop):** H1: 56px | H2: 36px | H3: 24px | Body: 16-18px
**Sizes (Mobile):** H1: 36px | H2: 28px | H3: 20px | Body: 16px
**Weights:** Headlines: 700 | H3: 600 | Body: 400 | CTAs: 600
**Line Height:** Headlines: 1.2 | Body: 1.6

## Spacing System

Use Tailwind units: **2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40**

**Section Spacing:**
- Between sections: `py-32` (desktop), `py-20` (mobile)
- Container: `max-w-7xl`, `px-20` (desktop), `px-6` (mobile)
- Element gaps: Headlines to text: `mb-6` | Text to CTA: `mt-10` | Between cards: `gap-8`

## Components

**Primary CTA Button:**
- Gradient background: `linear-gradient(135deg, #00BFFF 0%, #2563EB 50%, #7A5BFF 100%)`
- White text, 16px semibold, `px-8 py-4`, `rounded-lg`, height: 52px
- Hover: Lift `translateY(-2px)`, enhanced shadow, brightness +10%

**Secondary CTA Button:**
- Transparent background, 2px border `#E5E7EB`, navy text
- `px-8 py-3.5`, `rounded-lg`
- Hover: Blue border and text, light blue background `#F0F7FF`

**Cards:**
- White background, 1px border `#E5E7EB`, `rounded-xl`, `p-10`
- Hover: Lift `translateY(-4px)`, enhanced shadow

**Icons:**
- Line icons (Heroicons), 32px sections, 24px inline
- Color: Blue `#2563EB` solid (no gradient)

## Navigation

**Sticky navbar:** White background, 1px bottom border, height: 80px, `px-20` (desktop)
**Logo:** Gradient version (left), 40px height (desktop), 32px (mobile)
**Links:** Navy text, 16px medium, 32px spacing, hover: blue
**CTA:** Gradient button at far right: "Talk to Our Virtual Employee"

## Hero Section

**Layout:** Two-column grid (60% text / 40% visual), white background, min-height: 600px
**Left:** Pre-headline (small gray), headline (56px navy bold), subheadline (18px gray), gradient primary CTA, outline secondary CTA, trust line (14px light gray)
**Right:** Abstract geometric illustration with navy + blue shapes (no gradient), slow fade-in animation

## Floating AI Widget

**Position:** Fixed bottom-right, 24px from edges
**Design:** 64px circle, gradient background (brand gradient), white microphone icon (24px)
**Badge:** White pill above widget "Live 24/7", blue text, border
**Animation:** Pulse every 4 seconds, hover: scale 1.1
**Action:** Opens chat modal on click

## AI Chat Modal

**Slide from right:** 400px width (desktop), full-screen (mobile), white background
**Header:** Light gray background, "ForceNT Virtual Employee" title, small gradient logo, green "Online Now" dot, close X button
**Chat bubbles:** Blue `#2563EB` for AI, light gray for user
**Send button:** Gradient (matches primary CTA)

## Footer

White background, 1px top border, `py-16`
**Left:** Small gradient logo (32px) with tagline
**Columns:** Company / Connect / Legal links (gray text, hover: blue)

## Images

**Hero Visual:** Abstract geometric illustration (right side, 40% width) - navy and blue shapes, modern/tech aesthetic
**Logo:** Use provided gradient logo PNG in navbar (40px), hero area, footer (32px), and chat modal (24px)

## Animations (Minimal)

**Allowed:** Fade-in on scroll (0.6s), button hover lift (0.2s), card hover lift (0.3s), widget pulse (every 4s), timeline step highlights
**Forbidden:** Floating particles, wave animations, rotating text, auto-playing videos, complex background gradients
**Stagger:** Cards/timeline: 150ms delay between elements

## Accessibility

- WCAG AA contrast compliance
- Focus states: 2px blue outline
- Keyboard navigable
- ARIA labels on interactive elements

## Key Principle

**Gradient = Action/Interaction.** Use gradient exclusively for elements requiring user interaction (logo for brand recognition, CTAs for clicking, widget for engagement). Everything else remains clean with solid colors to maintain professional SaaS aesthetic.