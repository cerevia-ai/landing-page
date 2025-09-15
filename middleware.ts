// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes with correct syntax
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',   // OK: Clerk still supports this for catch-all dashboard routes
  '/api(.*)',         // ✅ Fixed: Use `/api(.*)` instead of `/api/.*`
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});