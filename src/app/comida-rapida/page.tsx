import type { Metadata } from 'next'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import { SITE_CONFIG } from '@/lib/metadata'
import styles from '@/app/page.module.scss'

export const metadata: Metadata = {
  title: `Recetas de Comida Rápida - ${SITE_CONFIG.name}`,
  description: 'Descubre deliciosas recetas de comida rápida fáciles y rápidas de preparar. Ideal para comidas express y sabrosas.',
  keywords: ['Comida Rápida', 'Recetas Express', 'Platos Rápidos'],
  openGraph: {
    title: `Recetas de Comida Rápida - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas de comida rápida fáciles y rápidas de preparar.',
    url: `${SITE_CONFIG.url}/comida-rapida`,
  },
  twitter: {
    title: `Recetas de Comida Rápida - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas de comida rápida fáciles y rápidas de preparar.',
  },
}

export default async function ComidaRapida() {
  const category = 'fast food'
  const limit = 12
  const initialRecipes = await RecipesService.getRandomRecipes(limit, [category])

  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Comida Rápida' initialRecipes={initialRecipes} tags={[category]} number={limit} />
    </div>
  )
}
