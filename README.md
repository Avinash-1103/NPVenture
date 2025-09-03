# TrustedCover — Insurance Service Website

A professional, modern, responsive website for an insurance service company in India.
Built with **React + Vite**, **TailwindCSS**, and **Framer Motion**. Includes routing, search & filter, partners, claims assistance, testimonials, FAQs, and a contact form that **sends email** via EmailJS with a mailto fallback.

## Quick Start

```bash
# 1) Install
npm install

# 2) Dev
npm run dev

# 3) Build
npm run build && npm run preview
```

## Configure Email Sending (EmailJS)

1. Create an account at https://www.emailjs.com and add an Email Service + Template.
2. Create a `.env` file in the project root with:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
3. Update the recipient in your EmailJS template to your company email.

**Fallback:** If the above env values are missing, the form opens a prefilled email draft (mailto) to `support@trustedcover.in`.

## Tailwind

Tailwind is preconfigured with a blue/white/grey corporate theme and form styles. Update colors in `tailwind.config.js`.

## SEO

Basic meta tags are in `index.html`. Update the `<title>`, description, and keywords for your brand.

## Project Structure

- `src/pages/*` — Home, About, Services (with search & filter), Partners, Claims, Contact (email form), FAQs
- `src/components/Testimonials.jsx` — testimonials section
- `src/index.css` — Tailwind layers + design tokens
- Routing in `src/App.jsx`

## Deploy

You can deploy to Netlify, Vercel, or GitHub Pages. For GitHub Pages, set `base` in `vite.config.js` if deploying to a subpath.

---

© 2025 TrustedCover. Customize text, partner logos, and addresses for your business.
