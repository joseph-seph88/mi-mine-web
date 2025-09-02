'use client';

import { Navigation } from '@/components/Navigation';
import { BackgroundAnimation } from '@/components/layout/BackgroundAnimation';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageRenderer } from '@/components/features/PageRenderer';
import { useNavigation } from '@/hooks/useNavigation';

export default function Home() {
  const { currentPage, navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <BackgroundAnimation />

      <Navigation currentPage={currentPage} onPageChange={navigateTo} />

      <PageContainer currentPage={currentPage}>
        <PageRenderer currentPage={currentPage} />
      </PageContainer>
    </div>
  );
}
