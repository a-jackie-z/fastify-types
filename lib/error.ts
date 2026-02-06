export interface CreateErrorOptions {
  statusCode?: number
  message: string
  name?: string
}

/**
 * Create a client-side error with HTTP status information
 * Adapted for frontend use without Fastify dependencies
 */
export function createError(options: CreateErrorOptions): Error & { statusCode?: number } {
  const {
    statusCode = 500,
    message,
    name = 'Error',
  } = options

  const error = new Error(message) as Error & { statusCode?: number }
  error.statusCode = statusCode
  error.name = name
  return error
}

// Common HTTP status codes for client-side error handling
export const HTTP_STATUS_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const

export type HttpStatusCode = typeof HTTP_STATUS_CODES[keyof typeof HTTP_STATUS_CODES]
