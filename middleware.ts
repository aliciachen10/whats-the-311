import { NextResponse, type NextRequest } from "next/server";

const PASSWORD = "aspen";

export function middleware(req: NextRequest) {
  const auth = req.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const pass = decoded.split(":")[1] ?? "";
      if (pass === PASSWORD) return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="What\'s the 311?"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
