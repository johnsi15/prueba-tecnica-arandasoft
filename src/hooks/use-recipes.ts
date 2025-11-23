import { useState, useEffect } from 'react'
import { RecipesService } from '@/services/recipes'
import { handleApiError } from '@/utils/api-error'
import type { RecipeCardData } from '@/types/recipe.types'

interface UseRecipesState {
  recipes: RecipeCardData[]
  loading: boolean
  error: string | null
}

interface UseRecipesOptions {
  autoFetch?: boolean
  number?: number
  tags?: string[]
}

export const useRecipes = (options: UseRecipesOptions = {}) => {
  const { autoFetch = true, number = 10, tags } = options

  const [state, setState] = useState<UseRecipesState>({
    recipes: [],
    loading: autoFetch,
    error: null,
  })

  const fetchRecipes = async (customNumber?: number, customTags?: string[]) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      const recipes = await RecipesService.getRandomRecipes(customNumber ?? number, customTags ?? tags)
      setState({ recipes, loading: false, error: null })
    } catch (error) {
      const errorMessage = handleApiError(error)
      setState({ recipes: [], loading: false, error: errorMessage })
    }
  }

  const searchRecipes = async (query: string, searchNumber?: number) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      const recipes = await RecipesService.searchRecipes(query, searchNumber ?? number)
      setState({ recipes, loading: false, error: null })
    } catch (error) {
      const errorMessage = handleApiError(error)
      setState({ recipes: [], loading: false, error: errorMessage })
    }
  }

  const fetchRecipesByType = async (type: string, typeNumber?: number) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      const recipes = await RecipesService.getRecipesByType(type, typeNumber ?? number)
      setState({ recipes, loading: false, error: null })
    } catch (error) {
      const errorMessage = handleApiError(error)
      setState({ recipes: [], loading: false, error: errorMessage })
    }
  }

  const reset = () => {
    setState({ recipes: [], loading: false, error: null })
  }

  useEffect(() => {
    if (autoFetch) {
      fetchRecipes()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    recipes: state.recipes,
    loading: state.loading,
    error: state.error,
    fetchRecipes,
    searchRecipes,
    fetchRecipesByType,
    reset,
  }
}
