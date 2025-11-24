'use client'

import { useQuery } from '@tanstack/react-query'
import { RecipesService } from '@/services/recipes'
import type { RecipeCardData } from '@/types/recipe.types'

interface UseRecipesQueryOptions {
  number?: number
  tags?: string[]
  initialData?: RecipeCardData[]
}

export const useRecipesQuery = (options: UseRecipesQueryOptions = {}) => {
  const { number = 10, tags, initialData } = options
  return useQuery({
    queryKey: ['recipes', number, tags],
    queryFn: () => RecipesService.getRandomRecipes(number, tags),
    initialData,
    staleTime: 10 * 60 * 1000, // 10 minutos
    gcTime: 30 * 60 * 1000, // 30 minutos
  })
}

export const useSearchRecipesQuery = (query: string, number = 10, enabled = false) => {
  return useQuery({
    queryKey: ['recipes', 'search', query, number],
    queryFn: () => RecipesService.searchRecipes(query, number),
    enabled: enabled && query.length > 0,
    staleTime: 2 * 60 * 1000, // 2 minutos
  })
}
