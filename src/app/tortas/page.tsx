import { RecipeGrid } from '@/components/recipes/recipe-grid'
import styles from '@/app/page.module.scss'

export default async function Tortas() {
  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Tortas' tags={['dessert']} />
    </div>
  )
}
