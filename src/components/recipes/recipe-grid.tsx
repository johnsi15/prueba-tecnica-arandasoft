import { RecipeCard } from './recipe-card'
import styles from './recipe-grid.module.scss'

interface Recipe {
  id: string
  name: string
  subname: string
  image: string
}

interface RecipeGridProps {
  recipes: Recipe[]
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <section className={styles.recipes}>
      <h2>Nuevas Recetas</h2>
      <div className={styles.grid}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} name={recipe.name} subname={recipe.subname} image={recipe.image} />
        ))}
      </div>
    </section>
  )
}
