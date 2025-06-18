import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lucas Cipriani - Frontend Developer',
  description:
    'This is my personal website, where you can find all my work related information.',
  robots: 'index, follow',
  openGraph: {
    title: 'Lucas Cipriani - Frontend Developer',
    description:
      'This is my personal website, where you can find all my work related information.',
    url: 'https://lucascipriani.com/',
    images: [
      {
        url: 'https://lucascipriani.com/images/lucas.png',
        width: 800,
        height: 600,
        alt: 'Lucas Cipriani - Frontend Developer',
      },
    ],
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
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
      <body>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Lucas Cipriani',
            url: 'https://lucascipriani.com',
            image: 'https://lucascipriani.com/images/lucas.png',
            sameAs: [
              'https://github.com/LucasRafaelCipriani',
              'https://www.linkedin.com/in/lucas-cipriani',
            ],
            jobTitle: 'Frontend Developer',
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Faculdade Estácio Florianópolis',
            },
            knowsAbout: [
              'React',
              'Next.js',
              'JavaScript',
              'TypeScript',
              'HTML',
              'CSS',
              'UI/UX Design',
            ],
            description:
              'This is my personal website, where you can find all my work related information.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Santa Catarina',
              addressCountry: 'BR',
            },
          }),
        }}
      />
    </html>
  );
}
