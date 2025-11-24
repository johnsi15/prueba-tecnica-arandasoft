import { ApiError, getHttpErrorMessage, handleApiError } from '@/utils/api-error'

const API_KEY = process.env.SPOONACULAR_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.spoonacular.com'

interface HttpClientOptions {
  revalidate?: number
  tags?: string[]
}

export async function httpClient<T>(
  endpoint: string,
  params: Record<string, string | number | boolean> = {},
  options: HttpClientOptions = {}
): Promise<T> {
  const queryParams = new URLSearchParams({
    apiKey: API_KEY || '',
    ...params,
  })

  const url = `${BASE_URL}${endpoint}?${queryParams}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: options.revalidate ?? 86400, // Revalidar cada 24 horas por defecto
        tags: options.tags,
      },
    })

    if (!response.ok) {
      const errorMessage = getHttpErrorMessage(response.status)
      throw new ApiError(response.status, errorMessage)
    }

    const data = await response.json()
    return data
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage)
  }
}
