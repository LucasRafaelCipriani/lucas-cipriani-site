import StoreProvider from '@/components/layout/StoreProvider';
import NotFoundSection from '@/components/sections/NotFoundSection';

export default function NotFound() {
  return (
    <StoreProvider>
      <NotFoundSection />
    </StoreProvider>
  );
}
