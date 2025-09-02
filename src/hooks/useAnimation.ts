import { useMemo } from 'react';
import { PARTICLE_CONFIGS, GRADIENT_BACKGROUNDS } from '@/lib/constants';

export const useBackgroundAnimation = () => {
    const gradientAnimation = useMemo(() => ({
        background: GRADIENT_BACKGROUNDS,
    }), []);

    const gradientTransition = useMemo(() => ({
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut' as const,
    }), []);

    const particleAnimation = useMemo(() => ({
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
    }), []);

    return {
        gradientAnimation,
        gradientTransition,
        particleAnimation,
        particles: PARTICLE_CONFIGS,
    };
};
