# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (`pnpm-lock.yaml`). `bun.lock` is a leftover from the earlier Bun setup. `pnpm-workspace.yaml` allows esbuild's build script (`allowBuilds`); without it `pnpm install` fails with `ERR_PNPM_IGNORED_BUILDS`.

- `pnpm install` — install dependencies
- `pnpm dev` — Vite dev server at http://localhost:5173
- `pnpm build` — production build to `dist/`
- `pnpm preview` — serve the build at http://localhost:4173
- `pnpm lint` — ESLint (flat config in `eslint.config.js`)

There is no test suite and no TypeScript; the code is plain JSX (React 19, Vite 6, Tailwind CSS v4 via `@tailwindcss/vite`, no `tailwind.config`).

## Architecture

Single-page portfolio with no router. [src/App.jsx](src/App.jsx) renders every section in order inside `ReactLenis` (smooth scroll): Navbar → Hero → ServiceSummary → Services → About → Experience → Works → Qualifications → ContactSummary → Contact. Each lives in `src/sections/`; shared animated pieces are in `src/components/`.

- **Loading gate:** `App` uses drei's `useProgress` to show a full-screen loader and keep the page at `opacity-0` until 3D assets (models in `public/models`) reach 100%. Any new heavy 3D asset affects this gate.
- **All content is data-driven from [src/constants/index.js](src/constants/index.js):** `personalInfo`, `resumes`, `servicesData`, `experienceData`, `openSourceData`, `projects`, `skillsData`, `educationData`, `achievementsData`, `socials`. To change copy, projects, links or resumes, edit this file rather than the section components. Some copy is also hardcoded in sections (e.g. the "4 domain-tailored technical resumes" strings in `Qualifications.jsx`, the Hero tagline), so grep before assuming a change is complete.
- **Resumes:** PDFs live in `public/resume/` and are referenced by `fileName`/`filePath` in `resumes` in the constants file; they are consumed by `Navbar.jsx` (download menu) and `Qualifications.jsx` (resumes tab). There are 5 resumes (SE, AI, DevOps, ECE, ROS); the ROS file on disk is `Anura_ROS_Resume.pdf` (typo kept, download name is set via `fileName`). Resume counts ("5 Resumes", "5 Roles") are hardcoded in `Hero`, `Qualifications` and `personalInfo.stats`.
- **Animation stack:** GSAP + `@gsap/react` (`useGSAP`) for scroll-driven effects in sections; `AnimatedHeaderSection` and `AnimatedTextLines` are the reusable text-reveal components. Hero uses React Three Fiber (`Canvas`, `Planet`, drei `Float`/`Environment`) with `react-responsive` `useMediaQuery` (breakpoint 853px) to adjust for mobile.
- Static assets (fonts, images, models) are in `public/` and referenced by absolute paths (`/resume/...`, `/models/...`). The site is deployed on Vercel (`dist/` is untracked build output).
