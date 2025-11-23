export class ApiError extends Error {
  public readonly statusCode: number
  public readonly isOperational: boolean

  constructor(statusCode: number, message: string, isOperational = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational

    // Mantener el stack trace apropiado
    Object.setPrototypeOf(this, ApiError.prototype)
    Error.captureStackTrace(this, this.constructor)
  }
}

const HTTP_ERROR_MESSAGES: Record<number, string> = {
  400: 'Solicitud inválida',
  401: 'API key inválida o faltante',
  402: 'Has excedido tu cuota de API diaria',
  403: 'Acceso prohibido',
  404: 'Recurso no encontrado',
  429: 'Demasiadas peticiones. Intenta de nuevo más tarde',
  500: 'Error interno del servidor',
  502: 'Error de gateway',
  503: 'Servicio no disponible',
  504: 'Timeout del gateway',
}

export function getHttpErrorMessage(statusCode: number): string {
  return HTTP_ERROR_MESSAGES[statusCode] || `Error HTTP: ${statusCode}`
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError
}

export function handleApiError(error: unknown): string {
  if (isApiError(error)) {
    return error.message
  }

  if (error instanceof TypeError) {
    return 'Error de conexión. Verifica tu conexión a internet'
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Ha ocurrido un error inesperado'
}
