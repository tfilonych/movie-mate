import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import './globals.css';
import Header from '@/components/Header';
import AuthProvider from '@/providers/AuthProvider';

const o_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'MovieMate | Movies, TV Shows and Episods',
  description:
    'MovieMate - application that allow you to find your favorite movie by one click',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${o_sans.className} h-screen w-full bg-slate-800 bg-gradient-to-b from-slate-950 via-slate-700 to-slate-950 text-white`}
      >
        <ReactQueryProvider>
          <AuthProvider>
            <Header />
            <main className="container mx-auto my-12">{children}</main>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
