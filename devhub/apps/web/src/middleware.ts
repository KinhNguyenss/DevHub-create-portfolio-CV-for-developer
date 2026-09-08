// src/middleware.ts
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

// Routes requiring authentication
const PROTECTED_ROUTES = ["/dashboard", "/cv", "/settings", "/profile"];

// Routes only for guests (redirect to dashboard if logged in)
const GUEST_ROUTES = ["/login"];

export default auth((req) => {
  const { nextUrl, auth: session } = req as any;
  const isLoggedIn = !!session;
  const path = nextUrl.pathname;

  // Redirect logged-in users away from guest routes
  if (isLoggedIn && GUEST_ROUTES.some((r) => path.startsWith(r))) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Redirect unauthenticated users from protected routes
  if (!isLoggedIn && PROTECTED_ROUTES.some((r) => path.startsWith(r))) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
