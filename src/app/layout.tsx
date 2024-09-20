import React from 'react';
import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Header from '@/components/Header';
import AuthProvider from '@/providers/AuthProvider';
import Stars from '@/components/Stars';

const titillium = Titillium_Web({
  weight: '400',
  subsets: ['latin'],
});
// const o_sans = Open_Sans({
//   weight: '400',
//   subsets: ['latin'],
//   style: 'italic',
// });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'MovieSpace | Movies, TV Shows and Episodes',
  description:
    'MovieSpace - application that allows you to find your favorite movie with one click',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titillium.className} h-screen w-full text-white`}>
        <Stars />
        <Toaster position="top-right" />
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
