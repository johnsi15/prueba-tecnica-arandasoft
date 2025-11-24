import { Hero } from '@/components/common/hero'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { Banner } from '@/components/common/banner'
import { RecipesService } from '@/services/recipes'
import styles from './page.module.scss'

export default async function Home() {
  const initialRecipes = await RecipesService.getRandomRecipes(8)

  return (
    <div className={styles.page}>
      <Hero />
      <RecipeGrid title='Nuevas Recetas' initialRecipes={initialRecipes} number={8} />
      <Banner />
    </div>
  )
}
