import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
