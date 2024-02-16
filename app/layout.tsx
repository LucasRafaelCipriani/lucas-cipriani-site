import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Lucas Cipriani Portfolio',
  description:
    'This is the portfolio page of Lucas Cipriani, where you can find all my work related information.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-500 text-white">
        <Header />
        <main className="flex-grow md:max-w-[1230px] md:m-auto">
          <div className="px-[20px] py-[80px] md:px-0">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
