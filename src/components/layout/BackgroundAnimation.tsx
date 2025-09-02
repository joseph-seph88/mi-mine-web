'use client';

import { motion } from 'framer-motion';
import { useBackgroundAnimation } from '@/hooks/useAnimation';

export const BackgroundAnimation = () => {
    const { gradientAnimation, gradientTransition, particleAnimation, particles } = useBackgroundAnimation();

    return (
        <div className="fixed inset-0 opacity-20">
            {/* 그라디언트 배경 */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20"
                animate={gradientAnimation}
                transition={gradientTransition}
            />

            {/* 떠다니는 파티클들 */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={particleAnimation}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
};
