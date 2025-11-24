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
