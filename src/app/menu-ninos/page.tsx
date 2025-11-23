import { RecipeGrid } from '@/components/recipes/recipe-grid'
import styles from '@/app/page.module.scss'

export default async function MenuNinos() {
  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Menú Niños' tags={['kids']} />
    </div>
  )
}
