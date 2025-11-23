'use client'

import { useQuery } from '@tanstack/react-query'
import { RecipesService } from '@/services/recipes'

export const useRecipesQuery = (number = 10, tags?: string[]) => {
  return useQuery({
    queryKey: ['recipes', 'random', number, tags],
    queryFn: () => RecipesService.getRandomRecipes(number, tags),
    staleTime: 5 * 60 * 1000, // 5 minutos
  })
}

export const useRecipesByTypeQuery = (type: string, number = 10) => {
  return useQuery({
    queryKey: ['recipes', 'type', type, number],
    queryFn: () => RecipesService.getRecipesByType(type, number),
    staleTime: 5 * 60 * 1000,
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
