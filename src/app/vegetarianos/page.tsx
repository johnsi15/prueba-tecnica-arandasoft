import { RecipeGrid } from '@/components/recipes/recipe-grid'
import styles from './page.module.scss'

export default async function Vegetarianos() {
  return (
    <div className={styles.vegetarian}>
      <RecipeGrid title='Vegetarianos' tags={['vegetarian']} />
    </div>
  )
}
