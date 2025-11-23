'use client'

import { RecipeCard } from '@/components/recipes/recipe-card'
import styles from '@/components/recipes/recipe-grid.module.scss'
import { useRecipesByTypeQuery } from '@/hooks/use-recipes-query'
import type { RecipeCardData } from '@/types/recipe.types'

interface RecipeGridProps {
  title: string
  initialRecipes?: RecipeCardData[]
  tags?: string[]
  number?: number
}

export function RecipeGrid({ title, initialRecipes, tags, number = 10 }: RecipeGridProps) {
  const { data: recipes, isLoading, error } = useRecipesByTypeQuery(tags?.[0] || '', number)

  const displayRecipes = initialRecipes || recipes || []

  if (!initialRecipes && isLoading) {
    return <div className={styles.loading}>Cargando recetas...</div>
  }

  if (!initialRecipes && error) {
    return <div className={styles.error}>Error: {error.message}</div>
  }

  return (
    <section className={styles.recipes}>
      <h2>{title}</h2>
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
