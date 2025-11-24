import type { Metadata } from 'next'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import { SITE_CONFIG } from '@/lib/metadata'
import styles from '@/app/page.module.scss'

export const metadata: Metadata = {
  title: `Recetas Vegetarianas - ${SITE_CONFIG.name}`,
  description: 'Descubre deliciosas recetas vegetarianas saludables y fáciles de preparar. Explora platos vegetarianos con ingredientes frescos y nutritivos.',
  keywords: ['Vegetarianas', 'Recetas Saludables', 'Platos Vegetarianos'],
  openGraph: {
    title: `Recetas Vegetarianas - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas vegetarianas saludables y fáciles de preparar.',
    url: `${SITE_CONFIG.url}/vegetarianos`,
  },
  twitter: {
    title: `Recetas Vegetarianas - ${SITE_CONFIG.name}`,
    description: 'Descubre deliciosas recetas vegetarianas saludables y fáciles de preparar.',
  },
}

export default async function Vegetarianos() {
  const category = 'vegetarian'
  const limit = 12
  const initialRecipes = await RecipesService.getRandomRecipes(limit, [category])

  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Vegetarianos' initialRecipes={initialRecipes} tags={[category]} number={limit} />
    </div>
  )
}
