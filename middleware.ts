import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // only run on the root URL
  if (request.nextUrl.pathname === "/") {
    const visited = request.cookies.get("visited")

    if (!visited) {
      const url = request.nextUrl.clone()
      url.pathname = "/Explore"
      const response = NextResponse.redirect(url)
      response.cookies.set({
        name: "visited",
        value: "true",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      })
      return response
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}