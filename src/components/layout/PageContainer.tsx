'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATION_DURATION } from '@/lib/constants';
import type { Page } from '@/types/common_types';

interface PageContainerProps {
    currentPage: Page;
    children: React.ReactNode;
}

export const PageContainer = ({ currentPage, children }: PageContainerProps) => {
    return (
        <main className="relative z-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: ANIMATION_DURATION.NORMAL }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </main>
    );
};
