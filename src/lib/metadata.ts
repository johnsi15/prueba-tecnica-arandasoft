export const LANG = 'es'

export const SITE_CONFIG = {
  name: 'Recetas App',
  title: 'Recetas - Explora deliciosas recetas de cocina',
  description:
    'Descubre una variedad de recetas deliciosas por categorías: comida rápida, vegetarianos, sopas, platos principales, tortas y menú niños. Integrada con Spoonacular API para una experiencia culinaria única.',
  url: 'https://recetas-app.com',
  ogImage: '/og-image.png',
}

export const META_DEFAULT = {
  generator: 'John Serrano',
  applicationName: SITE_CONFIG.name,
  keywords: [
    'Recetas',
    'Cocina',
    'Comida',
    'Platos',
    'Vegetarianos',
    'Comida Rápida',
    'Sopas',
    'Tortas',
    'Menú Niños',
    'Platos Principales',
    'Spoonacular',
    'API de Recetas',
    'Recetas Saludables',
    'Cocina Fácil',
    'Ingredientes',
    'Preparación',
    'Nutrición',
    'Comidas Deliciosas',
    'Recetas para Todos',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: 'index, follow',
}

export const OPEN_GRAPH = {
  locale: 'es_LA',
  type: 'website',
  siteName: SITE_CONFIG.name,
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  images: [
    {
      url: SITE_CONFIG.ogImage,
      width: 1200,
      height: 630,
      alt: SITE_CONFIG.title,
    },
  ],
}

export const TWITTER = {
  card: 'summary_large_image',
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  images: [SITE_CONFIG.ogImage],
  creator: '@recetasapp',
}
