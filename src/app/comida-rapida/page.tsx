import { RecipeGrid } from '@/components/recipes/recipe-grid'
import styles from '@/app/page.module.scss'

export default async function ComidaRapida() {
  return (
    <div className={styles.pageCategory}>
      <RecipeGrid title='Comida Rápida' tags={['fast food']} />
    </div>
  )
}
