import { RecipeGrid } from '@/components/recipes/recipe-grid'
import styles from '@/app/page.module.scss'

export default async function Sopas() {
  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Sopas' tags={['soup']} />
    </div>
  )
}
