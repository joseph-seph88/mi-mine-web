# MIMINE Web - AI Coding Agent Instructions

## Architecture Overview
This Next.js 15 app uses **Clean Architecture** with feature-based modules. Each feature follows a strict 3-layer pattern:
- `domain/` - Entities, repositories (interfaces), and use cases
- `infrastructure/` - Repository implementations and external service integrations  
- `presentation/` - React components, hooks, and UI logic

## Key Patterns

### Feature Structure
Follow the established pattern in `src/features/{feature}`:
```
auth/
├── domain/
│   ├── entities/user-signup.ts
│   ├── repositories/auth.repository.ts
│   └── usecases/auth-signup.usecase.ts
├── infrastructure/repositories/auth.repository.impl.ts
└── presentation/
    ├── components/signup-form.tsx
    ├── hooks/use-signup.ts
    └── pages/signup-page.tsx
```

### Network Layer
- **Frontend API calls**: Use `apiClient` from `@/lib/network/api-client` - includes auto token handling and 401 redirects
- **BFF/Proxy routes**: Use `proxyJson()` from `@/lib/network/bff` for Next.js API routes that proxy to backend
- **Path constants**: Import from `@/lib/constants/path/{api-path,bff-path}` - never hardcode URLs

### React Query Setup
- Pre-configured in `QueryProvider` with smart retry logic (no retry on 4xx except 408/429)
- 60s stale time, 5min garbage collection
- DevTools included for development

### Component Patterns  
- UI components in `src/ui/` use Framer Motion animations and Tailwind
- All client components marked with `'use client'` directive
- TypeScript interfaces for all props with proper typing

### API Route Pattern
BFF routes use this structure (see `src/app/api/post/all/route.ts`):
```typescript
export const revalidate = 60;
export async function GET() {
    const { controller, cleanup } = withTimeout(8000);
    try {
        return await proxyJson({
            path: ApiPath.POST_GET_ALL,
            revalidate,
            signal: controller.signal,
        });
    } finally {
        cleanup();
    }
}
```

## Development Commands
- `npm run dev` - Uses Turbopack for fast development
- `npm run build` - Production build with Turbopack  
- `npm run lint` - ESLint validation

## Critical Notes
- Backend API base URL via `NEXT_PUBLIC_API_BASE_URL` env var
- Authentication token stored in localStorage, handled automatically by `apiClient`
- All external API calls go through BFF routes (not direct from frontend)
- Use absolute imports with `@/` prefix for all internal modules
- Korean language support in error messages and UI text