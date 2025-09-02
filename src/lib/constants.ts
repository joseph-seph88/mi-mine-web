import type { ParticleConfig } from '@/types/common_types';

// 애니메이션 상수
export const ANIMATION_DURATION = {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
} as const;

// 파티클 설정
export const PARTICLE_CONFIGS: ParticleConfig[] = [
    { left: 10, top: 20, delay: 0, duration: 3 },
    { left: 25, top: 15, delay: 0.5, duration: 4 },
    { left: 40, top: 30, delay: 1, duration: 3.5 },
    { left: 60, top: 25, delay: 1.5, duration: 4.5 },
    { left: 80, top: 35, delay: 2, duration: 3.2 },
    { left: 15, top: 50, delay: 0.3, duration: 4.2 },
    { left: 35, top: 60, delay: 0.8, duration: 3.8 },
    { left: 55, top: 55, delay: 1.2, duration: 4.1 },
    { left: 75, top: 65, delay: 1.8, duration: 3.6 },
    { left: 90, top: 70, delay: 2.2, duration: 4.3 },
    { left: 20, top: 80, delay: 0.4, duration: 3.9 },
    { left: 45, top: 85, delay: 0.9, duration: 4.4 },
    { left: 65, top: 90, delay: 1.4, duration: 3.7 },
    { left: 85, top: 85, delay: 1.9, duration: 4.0 },
    { left: 5, top: 40, delay: 0.2, duration: 3.4 },
    { left: 30, top: 45, delay: 0.7, duration: 4.6 },
    { left: 50, top: 40, delay: 1.1, duration: 3.3 },
    { left: 70, top: 45, delay: 1.6, duration: 4.7 },
    { left: 95, top: 50, delay: 2.1, duration: 3.1 },
    { left: 12, top: 10, delay: 0.6, duration: 4.8 },
];

// 그라디언트 배경 설정
export const GRADIENT_BACKGROUNDS = [
    'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(244, 114, 182, 0.2))',
    'linear-gradient(to right, rgba(244, 114, 182, 0.2), rgba(59, 130, 246, 0.2))',
    'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
] as const;
