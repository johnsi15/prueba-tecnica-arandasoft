import type { Metadata } from 'next'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import { SITE_CONFIG } from '@/lib/metadata'
import styles from '@/app/page.module.scss'

export const metadata: Metadata = {
  title: `Recetas para Menú Niños - ${SITE_CONFIG.name}`,
  description: 'Descubre deliciosas recetas para menú niños, saludables y divertidas. Platos fáciles que los pequeños adorarán.',
  keywords: ['Menú Niños', 'Recetas para Niños', 'Platos Infantiles'],
  openGraph: {
    title: `Recetas para Menú Niños - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas para menú niños, saludables y divertidas.',
    url: `${SITE_CONFIG.url}/menu-ninos`,
  },
  twitter: {
    title: `Recetas para Menú Niños - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas para menú niños, saludables y divertidas.',
  },
}

export default async function MenuNinos() {
  const category = 'kids'
  const limit = 12
  const initialRecipes = await RecipesService.getRandomRecipes(limit, [category])

  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Menú Niños' initialRecipes={initialRecipes} tags={[category]} number={limit} />
    </div>
  )
}
