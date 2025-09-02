'use client';

import { HomePage } from '../HomePage';
import { JourneyPage } from '../JourneyPage';
import { MapPage } from '../MapPage';
import { BoardPage } from '../BoardPage';
import { SkillsSection } from '../SkillsSection';
import type { Page } from '@/types/common_types';

interface PageRendererProps {
    currentPage: Page;
}

export const PageRenderer = ({ currentPage }: PageRendererProps) => {
    switch (currentPage) {
        case 'home':
            return <HomePage />;
        case 'journey':
            return <JourneyPage />;
        case 'map':
            return <MapPage />;
        case 'board':
            return <BoardPage />;
        case 'skills':
            return <SkillsSection />;
        default:
            return <HomePage />;
    }
};
