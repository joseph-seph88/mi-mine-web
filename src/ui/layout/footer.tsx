'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <motion.footer
            className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid ml-8 md:grid-cols-3 gap-8">

                    <div className="md:col-span-2">
                        <motion.div
                            className="flex items-center gap-3 mb-4"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-xl font-bold text-black dark:text-white">MiMiNE 주식회사</span>
                        </motion.div>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            이것은 마이닝하기 위한 첫번째 레슨입니다.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md">
                            두번째 레슨은 곧 시작됩니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">CONTACT INFO</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>email: pathetic.sim@gmail.com</li>
                            <li>address: Seoul, Korea</li>
                            <li>developer: Joseph88</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        © 2025 MiMiNE. All rights reserved.
                    </p>
                    <div className="flex gap-13 mt-4 mr-12 md:mt-0">
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            Youtube
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}


