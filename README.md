<p align="center"></p>

<p align="center">
   <a href="#" target="_blank">
      <img src="https://cdn.shadcnstudio.com/ss-assets/logo/logo.png" alt="shadcn-studio-logo" width="40px" height="auto">
   </a>
</p>

<h1 align="center">
   Bistro De Elo — Landing Page
</h1>

<p>
   Sitio web oficial de <strong>Bistro De Elo</strong>, construido con
   <a href="https://shadcnstudio.com" target="_blank">shadcn/studio</a> + Astro.
   Un landing page moderno, rápido y responsivo para el negocio gastronómico local ubicado en Calle Mariana Grajales #53, con slogan <em>"Cada bocado, una sonrisa."</em>
</p>

<p>
    <a href="https://github.com/themeselection/shadcn-studio/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
    <a href="https://x.com/ShadcnStudio" target="_blank">
      <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/ShadcnStudio">
   </a>
</p>

<a href="https://themeselection.com" target="_blank">
  <img
    src="https://cdn.shadcnstudio.com/ts-assets/themeselection/logo/logo.png"
    alt="themeselection logo"
    height="30"
  />
</a>

<p>
  Template base provisto por
  <a href="https://themeselection.com" target="_blank">ThemeSelection</a>.
</p>

---

## Tabla de Contenidos 📋

- [Sobre el Negocio 🍔](#sobre-el-negocio-)
- [Features ✨](#-features)
- [Secciones del Sitio 📄](#-secciones-del-sitio)
- [Configuración del Negocio ⚙️](#️-configuración-del-negocio)
- [Project Structure 🏗️](#-project-structure)
- [Quick Start 🚀](#-quick-start)
- [Available Commands 🧞](#-available-commands)
- [Code Formatting 🎨](#-code-formatting)
- [Deployment 🌐](#-deployment)
- [Documentation 📚](#documentation-)
- [Community 🤝](#community-)
- [Useful Links 🎁](#useful-links-)

---

## Sobre el Negocio 🍔

**Bistro De Elo** es un negocio gastronómico local con identidad propia:

- 📍 **Dirección:** Calle Mariana Grajales #53, esquina Isabel Rubio y Colón
- 🎯 **Slogan:** *"Cada bocado, una sonrisa."*
- 🎨 **Colores de marca:** Verde (`#1a6b3a`) y Amarillo/Dorado (`#f5a623`)

### Productos y Servicios

| Categoría | Descripción |
|---|---|
| 🍽️ Comida Criolla | Menús completos para personas y eventos |
| 🍔 Hamburguesas | Especialidad del negocio |
| 🥤 Bebidas | Jugos naturales y batidos |
| 🥛 Productos Lácteos | Variedad de lácteos |
| 🥩 Productos Cárnicos | Carnes refrigeradas |
| 🫙 Confituras y Básicos | Productos de primera necesidad |

---

## ✨ Features

- 🚀 **Built with Astro** - Fast, modern static site generation
- 🎨 **Shadcn Studio Components** - Beautiful, ready-to-use Tailwind CSS components
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Optimized Performance** - Fast page loads and excellent SEO
- 🔧 **TypeScript Support** - Type-safe configuration and development
- 💅 **Prettier Integration** - Automatic code formatting with Tailwind class sorting
- 🌙 **Tailwind CSS 4** - Latest Tailwind with modern features

---

## 📄 Secciones del Sitio

El landing page de Bistro De Elo incluye las siguientes secciones:

1. **Header** — Navegación con logo y acceso rápido al menú
2. **Hero** — Portada principal con slogan y llamada a la acción
3. **Popular Dishes** — Platos más pedidos (hamburguesas, comida criolla)
4. **About Us** — Historia y valores de Bistro De Elo
5. **Testimonials** — Opiniones de clientes del grupo de WhatsApp
6. **New Items** — Novedades del menú y productos nuevos
7. **Offers** — Promociones y combos especiales
8. **Contact Us** — Dirección, mapa y enlace de WhatsApp

---

## ⚙️ Configuración del Negocio

Edita `src/consts.ts` para personalizar los datos del negocio:

```typescript
export const siteConfig = {
  creatorName: 'Bistro De Elo',
  demoName: 'Bistro De Elo',
  templateName: 'Restaurant Landing Page',

  // SEO & Metadata
  siteTitle: 'Bistro De Elo — Cada bocado, una sonrisa.',
  siteDescription:
    'Bistro De Elo: comida criolla, hamburguesas, jugos naturales y productos de primera necesidad. Ubicados en Calle Mariana Grajales #53, esquina Isabel Rubio y Colón.',
  siteUrl: 'https://bistroDeElo.com', // actualizar con dominio real
  siteLocale: 'es-CU',
  siteAuthor: 'Bistro De Elo',
  siteKeywords: ['bistro', 'restaurante', 'comida criolla', 'hamburguesas', 'jugos naturales', 'catering'],
  socialImage: '/images/social-preview.png',
  faviconPath: '/favicon/favicon.ico',
  themeColor: '#1a6b3a', // verde de la marca
  twitterHandle: '',
  analyticsId: '' // opcional
}
```

### Datos de Contacto

Actualiza la información de contacto en el componente `ContactUs`:

```typescript
export const contactInfo = {
  address: 'Calle Mariana Grajales #53, esquina Isabel Rubio y Colón',
  whatsapp: '+53XXXXXXXX', // número real del negocio
  whatsappGroup: 'https://chat.whatsapp.com/XXXXXX', // enlace al grupo
  hours: 'Lunes a Domingo — consultar disponibilidad',
}
```

---

## 🏗️ Project Structure

```text
shadcn-studio-astro-template/
├── public/                    # Public static assets
│   ├── favicon/               # Favicon files
│   ├── images/                # Public images
│   ├── _headers               # Netlify Deploy Headers
│   ├── robots.txt             # SEO crawler rules
│   └── site.webmanifest       # PWA manifest
│
├── src/
│   ├── assets/                # SVG and other assets
│   │
│   ├── components/            # Reusable UI components
│   │   └── blocks/            # Block components
│   │   └── layout/            # Layout components
│   │   └── sections/          # Data of components
│   │   └── ui/                # Base UI components
│   │
│   ├── layouts/               # Astro layout files
│   │   ├── BlankLayout.astro  # Minimal layout
│   │   ├── HeadSeo.astro      # SEO head layout
│   │   └── Layout.astro       # Main site layout
│   │
│   ├── lib/                   # Helper libraries
│   │   └── utils.ts           # Utility functions
│   │
│   ├── pages/                 # Route-based pages
│   │   ├── 404.astro          # 404 page
│   │   ├── index.astro        # Home page
│   │   ├── login.astro        # Login page
│   │   └── rss.xml.js         # RSS feed generator
│   │
│   ├── styles/
│   │   └── global.css         # Global styles
│   │
│   ├── utils/                 # Utility functions
│   │   └── seo.ts             # SEO helpers
│   └── consts.ts              # Application constants (SEO + negocio)
│
├── astro.config.mjs           # Astro configuration
├── content.config.ts          # Content collections config
├── .env.example               # Environment variable template
├── components.json            # shadcn/ui config
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
└── vercel.json                # Vercel deployment config
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18, 20, or 22+
- pnpm (recommended) or npm

### Installation

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:4321`

3. **Build for production:**

   ```bash
   pnpm build
   ```

   The built site will be in the `dist/` folder with relative asset paths for easy deployment.

4. **Preview the production build:**

   ```bash
   pnpm run preview
   ```

---

## 🧞 Available Commands

| Command       | Action                                                                                                                                 |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`         | Starts the Astro development server with hot-reload enabled. Your application will be available at http://localhost:4321/              |
| `build`       | Creates an optimized production build of your application. This command generates static files and optimizes your code for deployment. |
| `preview`     | Preview production site locally. Use this to test your production build locally before deploying.                                      |
| `lint`        | Runs ESLint to check your code for potential errors and code quality issues. This helps maintain clean and consistent code.            |
| `lint:fix`    | Runs ESLint and automatically fixes problems where possible.                                                                           |
| `format`      | Formats all files using Prettier to ensure consistent code style.                                                                      |
| `check-types` | Checks TypeScript types to catch type errors before building or deploying.                                                             |

---

## 🎨 Code Formatting

This project uses **Prettier** for code formatting with the following features:

- **Automatic formatting on save** in VS Code
- **Tailwind CSS class sorting** — Classes are automatically sorted in the recommended order
- **Extra space removal** — Trailing whitespace and extra spaces are removed
- **Consistent code style** — Enforced across all `.astro`, `.js`, `.ts`, and `.css` files

### Setup

1. **Install recommended VS Code extensions** (you'll be prompted when opening the project):
   - Prettier - Code formatter
   - Astro
   - Tailwind CSS IntelliSense
   - EditorConfig for VS Code

2. **Formatting will work automatically** on save thanks to:
   - `.prettierrc` — Prettier configuration
   - `.editorconfig` — Editor settings
   - `.vscode/settings.json` — VS Code workspace settings

3. **Manual formatting:**

   ```bash
   pnpm run format        # Format all files
   ```

---

## 🌐 Deployment

The production build creates static files with relative asset paths, making it easy to deploy to:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any static hosting service**

Simply upload the contents of the `dist/` folder after running `pnpm run build`.

---

## Documentation 📚

For comprehensive documentation on the base template, visit [shadcn/studio documentation](https://shadcnstudio.com/docs/getting-started/shadcn-studio-template-astro).

---

## Community 🤝

Join the shadcn/studio community:

- 🐦 [Follow on Twitter](https://x.com/ShadCNStudio)
- 🎮 [Join Discord](https://discord.com/invite/kBHkY7DekX)

---

## Useful Links 🎁

- [Shadcn Blocks](https://shadcnstudio.com/blocks)
- [Shadcn Templates](https://shadcnstudio.com/templates)
- [Shadcn Figma UI Kit](https://shadcnstudio.com/figma)
- [Shadcn Theme Generator](https://shadcnstudio.com/theme-generator)
- [Shadcn MCP Server](https://shadcnstudio.com/mcp)
- [Shadcn IDE Extension](https://shadcnstudio.com/ide-extension)
- [Shadcn Components](https://shadcnstudio.com/components)
- [Shadcn Figma to Code](https://shadcnstudio.com/figma-plugin)
