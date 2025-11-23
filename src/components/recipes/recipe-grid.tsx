'use client'

import { RecipeCard } from '@/components/recipes/recipe-card'
import styles from '@/components/recipes/recipe-grid.module.scss'
import { useRecipes } from '@/hooks/use-recipes'
import type { RecipeCardData } from '@/types/recipe.types'

interface RecipeGridProps {
  initialRecipes?: RecipeCardData[]
  tags?: string[]
  number?: number
}

export function RecipeGrid({ initialRecipes, tags, number = 10 }: RecipeGridProps) {
  const { recipes, loading, error } = useRecipes({
    autoFetch: !initialRecipes,
    number,
    tags,
  })

  const displayRecipes = initialRecipes || recipes

  if (loading) return <div className={styles.loading}>Cargando recetas...</div>
  if (error) return <div className={styles.error}>Error: {error}</div>

  return (
    <section className={styles.recipes}>
      <h2>Nuevas Recetas</h2>
      <div className={styles.grid}>
        {displayRecipes.length > 0 ? (
          displayRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <div className={styles.noResults}>No hay recetas disponibles en este momento.</div>
        )}
      </div>
    </section>
  )
}
