// src/lib/auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          // Request permission to read public repos
          scope: "read:user user:email public_repo",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist GitHub access token and username
      if (account) {
        token.accessToken = account.access_token;
        token.githubUsername = (profile as any)?.login;
      }
      return token;
    },
    async session({ session, token }) {
      // Expose GitHub data to client
      (session as any).accessToken = token.accessToken;
      (session as any).githubUsername = token.githubUsername;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
});
