import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Map, Camera, MessageCircle, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { Page, NavigationProps } from '@/types/common_types';

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const navItems = [
    { id: 'ho "me' as Page, icon: Home, label: '홈' },
    { id: 'journey' as Page, icon: Camera, label: '포트폴리오' },
    { id: 'skills' as Page, icon: Star, label: '전문성' },
    { id: 'map' as Page, icon: Map, label: '여행지도' },
    { id: 'board' as Page, icon: MessageCircle, label: '소통하기' },
  ];

  return (
    <motion.nav
      className="fixed bottom-6 right-6 z-50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-end gap-2">

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isExpanded ? "네비게이션 숨기기" : "네비게이션 보이기"}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </motion.div>
        </motion.button>


        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="flex flex-col gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-3 border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`relative flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 ${isActive
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
                      }`}
                    whileHover={{ scale: 1.02, x: -2 }}
                    whileTap={{ scale: 0.98 }}
                    title={item.label}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-xl -z-10"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}