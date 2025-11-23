import { RecipeGrid } from '@/components/recipes/recipe-grid'
import styles from '@/app/page.module.scss'

export default async function PlatosPrincipales() {
  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Platos Principales' tags={['main course']} />
    </div>
  )
}
