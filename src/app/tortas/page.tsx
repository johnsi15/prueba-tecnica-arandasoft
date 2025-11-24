import type { Metadata } from 'next'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import { SITE_CONFIG } from '@/lib/metadata'
import styles from '@/app/page.module.scss'

export const metadata: Metadata = {
  title: `Recetas de Tortas - ${SITE_CONFIG.name}`,
  description: 'Descubre deliciosas recetas de tortas y postres dulces. Variedad de tortas para endulzar tus momentos.',
  keywords: ['Tortas', 'Recetas de Postres', 'Dulces'],
  openGraph: {
    title: `Recetas de Tortas - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas de tortas y postres dulces.',
    url: `${SITE_CONFIG.url}/tortas`,
  },
  twitter: {
    title: `Recetas de Tortas - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas de tortas y postres dulces.',
  },
}

export default async function Tortas() {
  const category = 'dessert'
  const limit = 12
  const initialRecipes = await RecipesService.getRandomRecipes(limit, [category])

  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Tortas' initialRecipes={initialRecipes} tags={[category]} number={limit} />
    </div>
  )
}
