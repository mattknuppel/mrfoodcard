# Mr. Food Card

A lightweight static experience introducing the Mr. Food Card concept. The
site highlights the service value proposition, showcases sample offerings, and
now includes an advertorial funnel that leads visitors through a brief
qualification quiz.

## Getting started

1. Clone the repository
   ```bash
   git clone <your-fork-url>
   cd mrfoodcard
   ```
2. Open any of the HTML files in your browser of choice to view the pages
   locally.

No build tooling is required—the site is fully static.

## Project structure

```
mrfoodcard/
├── index.html       # Main marketing landing page
├── advertorial.html # Long-form advertorial story with CTA into the quiz
├── quiz.html        # Simple two-step eligibility quiz experience
├── styles.css       # Global styles and responsive layout rules
└── scripts.js       # Small enhancements for forms and dialogs on index.html
```

## Customization tips

- Update imagery by replacing the hero `<img>` source or the advertorial
  feature photo with a brand-approved asset.
- Edit the text in each section to reflect current offers, locations, or brand
  voice.
- Adjust colors by tweaking the CSS custom properties declared at the top of
  `styles.css` or the inline styles on the new pages.
- Replace the quiz call-to-action mailto links with your preferred lead capture
  destination.

## Accessibility notes

- The design includes accessible labels (`sr-only` class) for form inputs and
  ensures status messages use `aria-live` to communicate updates to assistive
  technology.
- The waitlist dialog uses the native `<dialog>` element and falls back to a
  simple open attribute for browsers without full support.
- Quiz questions and outcomes are announced via `aria-live` regions, and focus
  states remain visible on interactive elements.

## Deployment

Because the site is static, you can host it on any static hosting provider
(GitHub Pages, Netlify, Vercel, etc.). Upload the files at the project
root and you are ready to go.
