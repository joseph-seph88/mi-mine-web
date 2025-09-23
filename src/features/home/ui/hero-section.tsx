'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LogoBadge from '@/shared/ui/logo-badge';

export function HeroSection() {
    return (
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <LogoBadge
                    src="/images/mimine_logo.png"
                    alt="Mimine Logo"
                    size="lg"
                    shape="oval"
                    inset
                    className="bg-white dark:bg-gray-900"
                />
            </motion.div>

            <motion.h1
                className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <span className="text-gray-800 dark:text-gray-200">MiMiNE</span>
                <span className="pl-4 text-gray-600 dark:text-gray-400">WEB</span>
            </motion.h1>

            <motion.p
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                Join The Mining<br />
                Embark On The Adventure
            </motion.p>

            <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <span className="px-5 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800">
                    맛집
                </span>
                <span className="px-5 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800">
                    여행지
                </span>
                <span className="px-5 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800">
                    페스티벌
                </span>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
            >
                <motion.button
                    className="group flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>시작하기</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                    className="flex items-center justify-center gap-2 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>더 알아보기</span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
}


