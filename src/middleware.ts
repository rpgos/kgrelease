import { NextRequest, NextResponse } from "next/server"
import { getToken } from "@auth/core/jwt"

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.AUTH_SECRET })
  // @ts-ignore
  const user = req.auth?.user
  console.log({ session, user })
  if (req.nextUrl.pathname.startsWith('/dashboard') && (!session || user)) {
    const newUrl = new URL("/", req.nextUrl.origin)
    return NextResponse.rewrite(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
