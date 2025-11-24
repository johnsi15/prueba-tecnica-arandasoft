'use client'

import { RecipeCard } from '@/components/recipes/recipe-card'
import styles from '@/components/recipes/recipe-grid.module.scss'
import { useRecipesQuery } from '@/hooks/use-recipes-query'
import type { RecipeCardData } from '@/types/recipe.types'

interface RecipeGridProps {
  title: string
  initialRecipes?: RecipeCardData[]
  tags?: string[]
  number?: number
}

export function RecipeGrid({ title, initialRecipes, tags, number = 10 }: RecipeGridProps) {
  const { data: recipes, isLoading, error, refetch } = useRecipesQuery({ number, tags, initialData: initialRecipes })

  const displayRecipes = recipes || []

  if (!initialRecipes && isLoading) {
    return <div className={styles.loading}>Cargando recetas...</div>
  }

  if (!initialRecipes && error) {
    return (
      <div className={styles.error}>
        <p>Hubo un problema al cargar las recetas. Intenta de nuevo.</p>
        <button onClick={() => refetch()} className={styles.retryButton}>
          Reintentar
        </button>
      </div>
    )
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
