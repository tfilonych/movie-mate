import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const o_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${o_sans.className} bg-slate-800 text-white`}>
        <Header />
        <main className="container sm mx-auto">{children}</main>
      </body>
    </html>
  );
}
