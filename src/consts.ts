// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Bistro de Elo — Cada bocado, una sonrisa.'
export const SITE_DESCRIPTION =
  'Bistro de Elo: comida criolla, hamburguesas, jugos naturales y productos de primera necesidad. Ubicados en Calle Mariana Grajales #53, esquina Isabel Rubio y Colón.'

export const GITHUB_URL = 'https://github.com/bistro-de-elo/bistro-landing-page'
export const SITE_URL = 'https://bistroDeElo.com'

export const SITE_METADATA = {
  title: {
    default: 'Bistro de Elo — Cada bocado, una sonrisa.'
  },
  description:
    'Bistro de Elo: comida criolla, hamburguesas, jugos naturales y productos de primera necesidad. Ubicados en Calle Mariana Grajales #53, esquina Isabel Rubio y Colón.',
  keywords: [
    'bistro',
    'restaurante',
    'comida criolla',
    'hamburguesas',
    'jugos naturales',
    'catering',
    'comida cubana',
    'bistro de elo',
    'calle mariana grajales',
    'productos de primera necesidad'
  ],
  authors: [{ name: 'Bistro de Elo', url: SITE_URL }],
  creator: 'Bistro de Elo',
  publisher: 'Bistro de Elo',
  robots: {
    index: true,
    follow: true
  },
  language: 'es-CU',
  locale: 'es_CU',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'es_CU',
    siteName: 'Bistro de Elo',
    title: 'Bistro de Elo — Cada bocado, una sonrisa.',
    description: 'Bistro de Elo: comida criolla, hamburguesas, jugos naturales y productos de primera necesidad.',
    images: [
      {
        url: '/images/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Bistro de Elo — Restaurante de comida criolla',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    creator: '',
    title: 'Bistro de Elo — Cada bocado, una sonrisa.',
    description: 'Bistro de Elo: comida criolla, hamburguesas, jugos naturales y productos de primera necesidad.',
    images: ['/images/social-preview.png']
  },
  verification: {
    google: '',
    yandex: '',
    bing: ''
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  twitter: '',
  linkedin: '',
  discord: ''
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Bistro de Elo',
  legalName: 'Bistro de Elo',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2024',
  address: {
    streetAddress: 'Calle Mariana Grajales #53, esquina Isabel Rubio y Colón',
    addressLocality: 'Santiago de Cuba',
    addressRegion: 'Santiago de Cuba',
    postalCode: '',
    addressCountry: 'CU'
  },
  contactPoint: {
    telephone: '+5358135325',
    contactType: 'customer support',
    email: ''
  },
  sameAs: Object.values(SOCIAL_LINKS).filter(Boolean)
}
