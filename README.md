# UbuntuBlog Marketing Website

The **UbuntuBlog Marketing Website** is the public-facing website for UbuntuBlog. Its purpose is to introduce UbuntuBlog, explain how the platform works, showcase its features, and help businesses understand how they can use UbuntuBlog to manage and deliver content.

This project is **marketing-only**. It does not contain the UbuntuBlog CMS, dashboard, authentication, or content management functionality.

![Frontend CI](https://github.com/Luka2Lkay/UbuntuBlog-Marketing/actions/workflows/frontend-ci.yml/badge.svg)

## **Version**: `0.0.0`

---

## Purpose

The website is responsible for:

- Explaining what UbuntuBlog is
- Demonstrating how UbuntuBlog works
- Showcasing key features and benefits
- Explaining the multi-site and API architecture
- Providing information for businesses and developers
- Providing links to documentation
- Directing users to the UbuntuBlog platform

---

## Authentication

Authentication is **not implemented in this project**.

When a visitor clicks Login, they are redirected to the separate UbuntuBlog platform where authentication and application functionality are handled.

```text
UbuntuBlog Marketing Website
           │
           │ Login
           ▼
   UbuntuBlog Platform
           │
           ├── Authentication
           ├── Dashboard
           ├── Sites
           ├── Posts
           └── User Management
```

This keeps the marketing website independent from the core UbuntuBlog application.

---

## Architecture

The project uses a **feature-based architecture**.

```text
├──scripts
|   ├──data
|   |   └──technologies.json
|   └──generate_readme.js
├──src
|   ├──app
|   |   ├──App.tsx
|   |   ├──RootLayout.tsx
|   |   └──router.tsx
|   ├──components
|   |   ├──layout
|   |   |   └──Navbar.tsx
|   |   └──ui
|   |      └──NotFound.tsx
|   ├──features
|   |   └──home
|   |      ├──components
|   |      |   ├──BuiltFor.tsx
|   |      |   ├──Hero.tsx
|   |      |   └──HowItWorks.tsx
|   |      ├──data
|   |      |   ├──business_types.ts
|   |      |   └──steps.ts
|   |      ├──pages
|   |      |   └──Home.tsx
|   |      └──index.tsx
|   ├──lib
|   |   └──constants.ts
|   ├──index.css
|   └──main.tsx
├──.gitignore
├──.oxlintrc.json
├──index.html
├──package-lock.json
├──package.json
├──README.md
├──README.template.md
├──tsconfig.app.json
├──tsconfig.json
├──tsconfig.node.json
└──vite.config.ts

```

---

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

---

## Design

The website focuses on a modern technical SaaS aesthetic while clearly communicating UbuntuBlog's core architecture.

Framer Motion is used for purposeful animations such as:

- Hero entrance animations
- Scroll-based section animations
- Staggered feature cards
- Animated API/data flows
- Architecture diagrams
- Navigation transitions
- CTA interactions

The goal is to make the architecture of UbuntuBlog visually understandable rather than relying solely on text.

---

## Relationship to UbuntuBlog

UbuntuBlog is a centralized, multi-tenant blogging platform that allows businesses to manage their content through a dedicated platform and expose that content through an API.

The marketing website explains this relationship:

                    UbuntuBlog Platform
                           │
                    Manage Content
                           │
                           ▼
                     UbuntuBlog API
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
       Business A    Business B    Business C
         Website       Website       Website

The marketing website itself does **not** manage this content. Its role is to explain the platform and direct users to the appropriate UbuntuBlog application.

## Development

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

Build for production:

`npm run build`
