import { db } from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export const authConfig = {
  pages: {
    signIn: "/login",
    signOut: "/",
    newUser: "/register",
  },
  adapter: PrismaAdapter(db),
  providers: [GitHub],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const paths = ["/dashboard/:path*"];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("api/auth/login", nextUrl.origin);
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);

        return Response.redirect(redirectUrl);
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signOut, signIn } = NextAuth(authConfig);
