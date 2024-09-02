import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/libs/prisma';
import { compare } from 'bcryptjs';
import { User } from '.prisma/client';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      // @ts-expect-error @typescript-eslint/ban-ts-comment
      async authorize(credentials: { email: string; password: string }) {
        // Get the user by email
        const { email, password } = credentials;
        try {
          const user: User | null = await prisma.user.findUnique({
            where: { email: email },
          });
          if (!user || !user.password) {
            throw new Error('No user found with this email');
          }
          //Validate the password
          const isValid = compare(password, user.password);
          if (!isValid) {
            throw new Error('Invalid password');
          }
          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signIn',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session?.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
