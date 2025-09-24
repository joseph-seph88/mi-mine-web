'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './button';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed top-20 left-0 right-0 z-[80] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        >
                            <X size={20} className="text-gray-500" />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                                MiMiNE에 오신 것을 환영합니다
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                계정을 만들거나 로그인하세요
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full"
                                onClick={() => {
                                    console.log('회원가입');
                                    onClose();
                                }}
                            >
                                회원가입
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full"
                                onClick={() => {
                                    console.log('로그인');
                                    onClose();
                                }}
                            >
                                로그인
                            </Button>
                        </div>

                        <div className="flex items-center my-6">
                            <div className="flex-1 border-t border-gray-200 dark:border-gray-700" />
                            <span className="px-4 text-sm text-gray-500 dark:text-gray-400">또는</span>
                            <div className="flex-1 border-t border-gray-200 dark:border-gray-700" />
                        </div>

                        <div className="space-y-3">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full"
                                onClick={() => {
                                    console.log('Google 로그인');
                                    onClose();
                                }}
                            >
                                Google로 계속하기
                            </Button>

                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full"
                                onClick={() => {
                                    console.log('GitHub 로그인');
                                    onClose();
                                }}
                            >
                                GitHub로 계속하기
                            </Button>
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
                            계속하시면 <a href="#" className="underline">이용약관</a> 및{' '}
                            <a href="#" className="underline">개인정보처리방침</a>에 동의하는 것으로 간주됩니다.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


