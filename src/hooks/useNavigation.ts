import { useState } from 'react';
import type { Page } from '@/types/common_types';

export const useNavigation = (initialPage: Page = 'home') => {
    const [currentPage, setCurrentPage] = useState<Page>(initialPage);

    const navigateTo = (page: Page) => {
        setCurrentPage(page);
    };

    return {
        currentPage,
        navigateTo,
    };
};
