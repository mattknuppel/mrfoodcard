# Mr. Food Card

A lightweight static landing page to introduce the Mr. Food Card concept. The
site highlights the service value proposition, showcases sample offerings, and
invites visitors to join a waitlist.

## Getting started

1. Clone the repository
   ```bash
   git clone <your-fork-url>
   cd mrfoodcard
   ```
2. Open `index.html` in your browser of choice to view the page locally.

No build tooling is required—the site is fully static.

## Project structure

```
mrfoodcard/
├── index.html      # Main page content and layout
├── styles.css      # Global styles and responsive layout rules
└── scripts.js      # Small enhancements for forms and dialogs
```

## Customization tips

- Update imagery by replacing the hero `<img>` source with a brand-approved
  photo.
- Edit the text in each section to reflect current offers, locations, or brand
  voice.
- Adjust colors by tweaking the CSS custom properties declared at the top of
  `styles.css`.

## Accessibility notes

- The design includes accessible labels (`sr-only` class) for form inputs and
  ensures status messages use `aria-live` to communicate updates to assistive
  technology.
- The waitlist dialog uses the native `<dialog>` element and falls back to a
  simple open attribute for browsers without full support.

## Deployment

Because the site is static, you can host it on any static hosting provider
(GitHub Pages, Netlify, Vercel, etc.). Upload the three files at the project
root and you are ready to go.
