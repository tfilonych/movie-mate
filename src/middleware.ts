import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { options } from './app/api/auth/[...nextauth]/options';

export async function middleware(req: NextRequest) {
  //   const session = await getServerSession(options);
  //   // If there is no session, redirect to the signIn page
  //   if (!session?.user) {
  //     return NextResponse.redirect(new URL('/signin', req.url));
  //   }
  //   return NextResponse.next();
  // }
  // export const config = {
  //   matcher: ['/movies/[:id]', '/shows/[:id]', '/episodes/[:id]'],
}
