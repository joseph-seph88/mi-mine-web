import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { JourneyPage } from './components/JourneyPage';
import { MapPage } from './components/MapPage';
import { BoardPage } from './components/BoardPage';

type Page = 'home' | 'journey' | 'map' | 'board';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'journey':
        return <JourneyPage />;
      case 'map':
        return <MapPage />;
      case 'board':
        return <BoardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="fixed inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20"
          animate={{
            background: [
              'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(244, 114, 182, 0.2))',
              'linear-gradient(to right, rgba(244, 114, 182, 0.2), rgba(59, 130, 246, 0.2))',
              'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* 떠다니는 파티클들 */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}