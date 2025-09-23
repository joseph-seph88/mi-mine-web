'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';

export function LogoDisplaySection() {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <motion.div
                className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-12 border border-gray-200 dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="group relative mx-auto w-64 md:w-80 aspect-square">
                        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-teal-500/30 blur-2xl" />
                        <div className="relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-white/30 to-white/5 dark:from-white/10 dark:to-white/5 backdrop-blur-xl ring-1 ring-black/5 shadow-2xl transition-transform duration-300 group-hover:-translate-y-0.5">
                            <div className="flex h-full items-center justify-center rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/80 dark:bg-gray-900/60">
                                <div className="relative w-40 h-40 md:w-56 md:h-56">
                                    <Image
                                        src="/images/mimine_logo.png"
                                        alt="Mimine Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold text-black dark:text-white">MiMiNE</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Join The Mining <br />
                        Embark On The Adventure
                    </p>

                    <div className="flex justify-center gap-6 pt-4">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Camera size={18} className="text-gray-800 dark:text-gray-200" />
                            <span className="text-sm font-medium">맛집</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <MapPin size={18} className="text-gray-800 dark:text-gray-200" />
                            <span className="text-sm font-medium">여행지</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Heart size={18} className="text-gray-800 dark:text-gray-200" />
                            <span className="text-sm font-medium">페스티벌</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}


