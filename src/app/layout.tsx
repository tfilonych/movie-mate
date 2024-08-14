import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import ReactQueryProvider from './utils/ReactQueryProvider';
import './globals.css';
import Header from './components/Header';
import AuthProvider from './context/AuthProvider';

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
      <body className={`${o_sans.className} bg-slate-800 text-white w-full`}>
        <ReactQueryProvider>
          <AuthProvider>
            <Header />
            <main className="container sm mx-auto my-12">{children}</main>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
