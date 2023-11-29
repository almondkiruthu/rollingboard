import { NextResponse } from "next/server";

import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      if (auth.orgSlug) {
        path = `/organization/${auth.orgSlug}`;
      }

      const organizationSelection = new URL(path, req.url);
      return NextResponse.redirect(organizationSelection);
    }

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if (
      auth.userId &&
      !auth.orgSlug &&
      req.nextUrl.pathname !== "/select-org"
    ) {
      const organizationSelection = new URL("/select-org", req.url);

      return NextResponse.redirect(organizationSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
