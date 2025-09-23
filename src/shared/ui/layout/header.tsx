'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { AuthModal } from '@/shared/ui/auth-modal';

export function Header() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-4 py-2">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-black dark:border-white">
                            <Image
                                src="/images/mimine_logo.png"
                                alt="Mimine Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-black dark:text-white">MiMiNE</span>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-34">
                        <a
                            href="#home"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            HOME
                        </a>
                        <a
                            href="#FEED"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            FEED
                        </a>
                        <a
                            href="#MAP"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            MAP
                        </a>
                        <a
                            href="#MY"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            MY
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <Button
                        variant="primary"
                        size="md"
                        onClick={() => setIsAuthModalOpen(true)}
                    >
                        시작하기
                    </Button>
                </div>
            </div>

            {/* Auth Modal */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </motion.header>
    );
}


