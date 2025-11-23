import { RecipeGrid } from '@/components/recipes/recipe-grid'
import styles from '@/app/page.module.scss'

export default function Vegetarianos() {
  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Vegetarianos' tags={['vegetarian']} />
    </div>
  )
}
