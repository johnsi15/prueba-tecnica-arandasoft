import { httpClient } from '@/utils/http-client'
import type { Recipe, RandomRecipesResponse } from '@/types/recipe.types'

export class RecipesService {
  static async getRandomRecipes(number = 10, tags?: string[]): Promise<Recipe[]> {
    const params: Record<string, string | number> = { number }

    if (tags && tags.length > 0) {
      params.tags = tags.join(',')
    }

    const response = await httpClient<RandomRecipesResponse>('/recipes/random', params, { revalidate: 3600 })

    return response.recipes
  }

  static async getRecipeById(id: number): Promise<Recipe> {
    return await httpClient<Recipe>(
      `/recipes/${id}/information`,
      {},
      { revalidate: 86400 } // 24 horas
    )
  }

  static async searchRecipes(query: string, number = 10): Promise<Recipe[]> {
    const response = await httpClient<{ results: Recipe[] }>('/recipes/complexSearch', {
      query,
      number,
      addRecipeInformation: true,
    })

    return response.results
  }

  static async getRecipesByType(type: string, number = 10): Promise<Recipe[]> {
    return await this.getRandomRecipes(number, [type])
  }
}

export const recipeService = RecipesService
