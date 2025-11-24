import type { Metadata } from 'next'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import { SITE_CONFIG } from '@/lib/metadata'
import styles from '@/app/page.module.scss'

export const metadata: Metadata = {
  title: `Recetas de Platos Principales - ${SITE_CONFIG.name}`,
  description: 'Explora deliciosas recetas de platos principales para comidas completas y satisfactorias. Variedad de opciones culinarias.',
  keywords: ['Platos Principales', 'Recetas Principales', 'Comidas Completas'],
  openGraph: {
    title: `Recetas de Platos Principales - ${SITE_CONFIG.name}`,
    description: 'Explora deliciosas recetas de platos principales para comidas completas y satisfactorias.',
    url: `${SITE_CONFIG.url}/platos-principales`,
  },
  twitter: {
    title: `Recetas de Platos Principales - ${SITE_CONFIG.name}`,
    description: 'Explora deliciosas recetas de platos principales para comidas completas y satisfactorias.',
  },
}

export default async function PlatosPrincipales() {
  const category = 'main course'
  const limit = 12
  const initialRecipes = await RecipesService.getRandomRecipes(limit, [category])

  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Platos Principales' initialRecipes={initialRecipes} tags={[category]} number={limit} />
    </div>
  )
}
