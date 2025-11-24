import { httpClient } from '@/utils/http-client'
import type { Recipe, RandomRecipesResponse, RecipeCardData } from '@/types/recipe.types'

export class RecipesService {
  private static mapToCardData(recipe: Recipe): RecipeCardData {
    const getDifficulty = (time: number, score: number): string => {
      if (time <= 20 && score >= 70) return 'fácil'
      if (time <= 45 && score >= 50) return 'medio'
      return 'difícil'
    }

    const processTitle = (title: string): { name: string; subname?: string } => {
      const words = title.split(' ')
      const name = words[0]
      const subname = words[1] || ''

      return { name, subname: subname || undefined }
    }

    const { name, subname } = processTitle(recipe.title)

    return {
      id: recipe.id,
      name,
      subname,
      image: recipe.image,
      portionSize: `${recipe.servings} ${recipe.servings === 1 ? 'ración' : 'raciones'}`,
      prepTime: `${recipe.readyInMinutes} minutos`,
      difficulty: getDifficulty(recipe.readyInMinutes, recipe.spoonacularScore),
      rating: Math.round((recipe.spoonacularScore / 20) * 10) / 10,
    }
  }

  static async getRandomRecipes(number = 10, tags?: string[]): Promise<RecipeCardData[]> {
    const params: Record<string, string | number> = { number }

    if (tags && tags.length > 0) {
      params['include-tags'] = tags.join(',')
    }

    const response = await httpClient<RandomRecipesResponse>('/recipes/random', params, { revalidate: 3600 })

    return response.recipes.map(this.mapToCardData)
  }

  static async getRecipeById(id: number): Promise<Recipe> {
    return await httpClient<Recipe>(
      `/recipes/${id}/information`,
      {},
      { revalidate: 86400 } // 24 horas
    )
  }

  static async searchRecipes(query: string, number = 10): Promise<RecipeCardData[]> {
    const response = await httpClient<{ results: Recipe[] }>('/recipes/complexSearch', {
      query,
      number,
      addRecipeInformation: true,
    })

    return response.results.map(this.mapToCardData)
  }
}

export const recipeService = RecipesService
