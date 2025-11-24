import type { Metadata } from 'next'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import { SITE_CONFIG } from '@/lib/metadata'
import styles from '@/app/page.module.scss'

export const metadata: Metadata = {
  title: `Recetas de Sopas - ${SITE_CONFIG.name}`,
  description: 'Descubre deliciosas recetas de sopas calientes y reconfortantes. Variedad de sopas para todas las ocasiones.',
  keywords: ['Sopas', 'Recetas de Sopas', 'Platos Calientes'],
  openGraph: {
    title: `Recetas de Sopas - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas de sopas calientes y reconfortantes.',
    url: `${SITE_CONFIG.url}/sopas`,
  },
  twitter: {
    title: `Recetas de Sopas - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas de sopas calientes y reconfortantes.',
  },
}

export default async function Sopas() {
  const category = 'soup'
  const limit = 12
  const initialRecipes = await RecipesService.getRandomRecipes(limit, [category])

  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Sopas' initialRecipes={initialRecipes} tags={[category]} number={limit} />
    </div>
  )
}
