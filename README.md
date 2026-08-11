# Shan Liu — Software Engineer & Builder

Personal portfolio for Shan Liu, focused on backend engineering, automation, AI-assisted development, and product building. It includes Projects, Impact, Experience, Skills, About, and Contact sections, with featured work such as The Hague Appointment Alert and API Change Assistant.

## Live site

[shan.authenticbecome.com](https://shan.authenticbecome.com)

## Tech stack

- Next.js
- React
- Tailwind CSS
- TypeScript
- ESLint
- Cloudflare Pages

## Local development

Requires Node.js 22.13.0 or newer.

```bash
npm install
npm run dev
```

## Build and test

```bash
npm run build
npm run lint
npm run typecheck
npm test
```

The production build is a static export in `out/`. The test command builds the site and runs rendered HTML smoke tests using Node's built-in test runner.

## Deployment

Deploy through Cloudflare Pages using the **Next.js (Static HTML Export)** preset, `npm run build` as the build command, and `out` as the build output directory.
