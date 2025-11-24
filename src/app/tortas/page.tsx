import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { RecipesService } from '@/services/recipes'
import styles from '@/app/page.module.scss'

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
