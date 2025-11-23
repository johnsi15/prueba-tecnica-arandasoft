export interface Recipe {
  id: number
  title: string
  image: string
  imageType: string
  readyInMinutes: number
  servings: number
  sourceUrl: string
  summary: string
  cuisines: string[]
  dishTypes: string[]
  diets: string[]
  vegetarian: boolean
  vegan: boolean
  glutenFree: boolean
  dairyFree: boolean
  veryHealthy: boolean
  cheap: boolean
  veryPopular: boolean
  sustainable: boolean
  lowFodmap: boolean
  aggregateLikes: number
  spoonacularScore: number
  healthScore: number
  pricePerServing: number
  extendedIngredients?: ExtendedIngredient[]
  instructions?: string
  analyzedInstructions?: AnalyzedInstruction[]
}

export interface ExtendedIngredient {
  id: number
  aisle: string
  image: string
  consistency: string
  name: string
  nameClean: string
  original: string
  originalName: string
  amount: number
  unit: string
  meta: string[]
  measures: {
    us: { amount: number; unitShort: string; unitLong: string }
    metric: { amount: number; unitShort: string; unitLong: string }
  }
}

export interface AnalyzedInstruction {
  name: string
  steps: {
    number: number
    step: string
    ingredients: { id: number; name: string; localizedName: string; image: string }[]
    equipment: { id: number; name: string; localizedName: string; image: string }[]
    length?: { number: number; unit: string }
  }[]
}

export interface RandomRecipesResponse {
  recipes: Recipe[]
}
