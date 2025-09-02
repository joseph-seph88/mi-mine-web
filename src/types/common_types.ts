export type Page = 'home' | 'journey' | 'map' | 'board' | 'skills';

export interface NavigationProps {
    currentPage: Page;
    onPageChange: (page: Page) => void;
}

export interface AnimationConfig {
    duration: number;
    delay?: number;
    ease?: string;
}

export interface ParticleConfig {
    left: number;
    top: number;
    delay: number;
    duration: number; 
}

