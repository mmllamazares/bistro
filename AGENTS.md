# AGENTS.md — Bistro De Elo

## Descripción del Negocio

**Bistro de Elo** es un negocio gastronómico local con slogan _"Cada bocado, una sonrisa."_
Combina restaurante de comida criolla, servicio de catering para eventos y venta de productos de primera necesidad.

- **Dirección:** Calle Mariana Grajales #53, esquina Isabel Rubio y Colón
- **WhatsApp:** +53XXXXXXXX _(actualizar con número real)_
- **Dominio:** https://bistroDeElo.com _(actualizar cuando esté disponible)_

### Identidad de Marca

- **Color primario:** `#1a6b3a` (verde)
- **Color secundario:** `#f5a623` (amarillo/dorado)
- **Locale:** `es-CU`
- **Tono:** Cercano, informal y orientado a la comunidad local

## Stack Tecnológico

- **Framework:** Astro v5 + React v19 (generación estática)
- **Componentes UI:** shadcn/studio (plantilla base), shadcn/ui base en `src/components/ui/`
- **Estilos:** Tailwind CSS v4
- **Lenguaje:** TypeScript (strict)
- **Formato:** Prettier v3 + `prettier-plugin-tailwindcss` + `prettier-plugin-astro`
  - `semi: false`, `singleQuote: true`, `trailingComma: 'es5'` en JS/TS; `'none'` en JSON.
- **Package manager:** pnpm
- **Node.js:** 18, 20 o 22+

## Comandos de Desarrollo

```bash
pnpm install        # Instalar dependencias
pnpm run dev        # Servidor local en http://localhost:4321
pnpm build          # Build de producción → dist/
pnpm run preview    # Preview del build

# Calidad de código
pnpm run format     # Prettier sobre src/**/*.{js,jsx,ts,tsx,astro,css}
pnpm run lint       # ESLint (astro, ts, react)
pnpm run lint:fix   # ESLint --fix
pnpm check-types    # tsc --noEmit (verifica sin emitir)
```

## Arquitectura y Convenciones

- **Single-page site.** El punto de entrada es `src/pages/index.astro`. No hay routing real.
- **Layout principal:** `src/layouts/Layout.astro` y `BlankLayout.astro`.
- **Estructura de componentes:**
  - `src/components/blocks/` — Secciones del landing (hero, about, contact, etc.).
  - `src/components/layout/` — Header, Footer, ThemeToggle.
  - `src/components/ui/` — Componentes base de shadcn/ui. **No modificar salvo estricta necesidad.**
- **Alias principal:** `@/` mapea a `src/` (ver `tsconfig.json`).
- **Colores de marca:** Todos los estilos globales y variables de Tailwind v4 se configuran en `src/styles/global.css`.

## Archivos Clave para Agentes

| Archivo                 | Propósito                                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/consts.ts`         | **Configuración central del negocio.** SEO, metadata, datos de contacto y branding. Cualquier cambio de texto o datos del negocio debe realizarse aquí. |
| `src/styles/global.css` | Variables de color de marca y estilos globales (Tailwind v4).                                                                                           |
| `astro.config.mjs`      | Configuración de Astro (includes sitemap, react, mdx, tailwindcss).                                                                                     |
| `components.json`       | Configuración de shadcn/ui.                                                                                                                             |
| `vercel.json`           | Configuración de deploy y headers de seguridad en Vercel.                                                                                               |

## Notas Operativas

- **Idioma:** Todo el contenido visible del sitio debe estar en **español (`es-CU`)**.
- **Colores de marca:** Respetar `#1a6b3a` (verde) y `#f5a623` (amarillo/dorado) en todos los componentes visuales.
- **No modificar `src/components/ui/`:** Son los componentes base de la librería shadcn/ui. Si se necesita una variante, crear un componente wrapper en `src/components/blocks/` o `src/components/sections/`.
- **Nuevas secciones:** Seguir el patrón existente en `src/components/blocks/`. Cada sección es un componente funcional de React dentro de su propia carpeta.
- **Canal de contacto:** WhatsApp es el principal. Incluir enlace directo `https://wa.me/+53XXXXXXXX` en la sección de contacto.
- **Deploy:** Build estático compatible con Vercel, Netlify, GitHub Pages o cualquier hosting estático.
