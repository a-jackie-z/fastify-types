# @a_jackie_z/fastify-types

Frontend-compatible type definitions and schemas for Fastify API contracts. This package provides essential types, response schemas, and utilities that can be safely imported in React applications and other frontend environments.

## Installation

```bash
npm install @a_jackie_z/fastify-types
```

## Features

- ✅ **Frontend Compatible**: No Node.js dependencies - works in browsers and React apps
- ✅ **TypeScript Support**: Full TypeScript definitions included
- ✅ **Zod Integration**: Response schemas compatible with Zod validation
- ✅ **Tree Shakeable**: Import only what you need

## Exports

### Response Types

```typescript
import { 
  SuccessResponse, 
  ErrorResponse, 
  ValidationDetail,
  formatSuccess,
  formatError,
  successResponseSchema,
  errorResponseSchema
} from '@a_jackie_z/fastify-types'

// Type-safe response handling
const response: SuccessResponse<{ message: string }> = formatSuccess(200, { 
  message: 'Hello World' 
})

// Zod schema validation
const UserResponseSchema = successResponseSchema(z.object({
  id: z.string(),
  username: z.string()
}))
```

### JWT Types

```typescript
import { 
  TokenTypeConfig, 
  JwtAlgorithm,
  SignTokenOptions,
  VerifyTokenOptions,
  parseJwtSecrets
} from '@a_jackie_z/fastify-types'

// JWT configuration
const tokenConfig: TokenTypeConfig = {
  headerName: 'authorization',
  expiresIn: '15m',
  algorithm: 'HS256',
  iss: 'my-service'
}

// Parse secrets from environment
const secrets = parseJwtSecrets('key1=secret1|key2=secret2')
```

### Error Handling

```typescript
import { 
  createError, 
  HTTP_STATUS_CODES,
  HttpStatusCode 
} from '@a_jackie_z/fastify-types'

// Create client-side errors with status codes
const error = createError({
  statusCode: HTTP_STATUS_CODES.NOT_FOUND,
  message: 'User not found'
})
```

## Differences from @a_jackie_z/fastify

This package is a frontend-compatible subset of the main `@a_jackie_z/fastify` package:

**✅ Included:**
- Response types and formatters
- JWT configuration types
- Error types and utilities
- Zod schemas for API contracts

**❌ Excluded:**
- Fastify server instances and plugins
- JWT signing/verification functions
- Node.js crypto utilities
- Server-specific middleware

## Usage with React

```typescript
// api/types.ts
import type { SuccessResponse, ErrorResponse } from '@a_jackie_z/fastify-types'

export type UserApiResponse = SuccessResponse<{
  id: string
  username: string
  email: string
}>

// hooks/useApi.ts
import { successResponseSchema, errorResponseSchema } from '@a_jackie_z/fastify-types'

const UserSchema = successResponseSchema(z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email()
}))

// Type-safe API response validation
const response = UserSchema.parse(await fetch('/api/users').then(r => r.json()))
```

## License

MIT
