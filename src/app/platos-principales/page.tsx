import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import styles from '@/app/page.module.scss'

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
