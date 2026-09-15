# Premium Zurich IT Agency Website

## Overview
Build a polished, dark-only boutique software studio website that positions Swiss project leadership and a senior offshore engineering team as one accountable delivery unit. The site will use a restrained editorial layout, precise technical typography, subtle grid geometry, and purposeful motion.

## Pages and navigation
- Create dedicated pages for Home, What We Build, How We Work, About, and Start a Project.
- Add a shared sticky header with a transparent-to-solid scroll treatment, desktop navigation, and a full-screen mobile menu.
- Keep the home page as the strongest narrative overview, with concise previews linking into each deeper page.
- Add a compact footer with Zurich contact details, Swiss registration wording, and essential links.

## Home page
- Full-height opening section with availability badge, the “We ship products. Not decks.” headline, Swiss oversight message, two calls to action, and three trust metrics.
- Numbered three-part manifesto focused on boutique quality, senior execution, and offshore speed.
- Three interactive service panels for mobile, software/web platforms, and cloud infrastructure.
- Six delivery principles in a clean two-column editorial grid.
- Zurich/offshore comparison culminating in “Best of both worlds.”
- Founder feature for Yana Maletska, including the supplied career history, company wordmarks, and LinkedIn action.
- Categorized technology grid and a strong project inquiry transition.

## Supporting pages
- **What We Build:** Expanded service details, representative capabilities, technologies, and engagement outcomes.
- **How We Work:** Six principles, a clear delivery sequence, and Swiss accountability model.
- **About:** Yana’s profile, experience at Meta/Oculus VR, Atlassian, and Pilatus Aircraft, plus the studio operating model.
- **Start a Project:** Inquiry form with name, email, company, project description, budget, timeline, validation, submission feedback, and contact metadata.

## Interaction and utility details
- Smooth restrained section reveals, subtle line/grid movement, service-card responses, and reduced-motion support.
- Floating “Book a free call” action opening a focused scheduling/contact dialog.
- GDPR cookie notice with accept and decline controls persisted in the browser.
- Form success message and toast; submission remains a polished front-end experience until a delivery service or inbox destination is provided.
- Accessible keyboard navigation, focus states, dialog behavior, labels, and mobile layouts.

## Visual system
- Dark-only palette anchored by `#08090A`, off-white type, indigo `#6366F1`, and fine `#27272A` borders, translated into semantic theme tokens.
- Geist-style display typography with a clean technical body face, loaded through the document head.
- Sharp editorial spacing, small radii, thin rules, restrained glow, and geometric CSS accents rather than stock imagery.
- Reusable buttons, fields, layout primitives, dialogs, and navigation treatments to keep every page consistent.

## Technical details
- Use TanStack Start routes with unique SEO title, description, Open Graph metadata, canonical URL, and Twitter card metadata on every page.
- Build shared site UI as focused React components and use existing icon and toast libraries.
- Keep all color and shadow values in the global token system; no hardcoded presentation colors in page components.
- Verify the complete experience at desktop and mobile sizes, including navigation, form states, dialog, cookie notice, no horizontal overflow, and a clean preview build.
