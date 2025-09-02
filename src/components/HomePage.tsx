import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, MapPin, Heart } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              className="inline-flex items-center gap-2 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Heart size={16} className="text-blue-500" />
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">여행 이야기</span>
            </motion.div>


            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="te₩xt-blue-600 dark:text-blue-400">JOSEPH88</span>
            </motion.h1>


            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              사진과 영상으로 기록하는 여행의 순간들.<br />
              새로운 곳에서 만나는 사람들과의 만남,<br />
              그리고 그 모든 경험을 나누고 싶습니다.
            </motion.p>


            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                사진작가
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                여행작가
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                크리에이터
              </span>
            </motion.div>


            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <motion.button
                className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>포트폴리오 보기</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>연락하기</span>
              </motion.button>
            </motion.div>
          </motion.div>


          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >

              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600">
                  <img
                    src="https://images.unsplash.com/photo-1614248440717-115c4b39ed9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2ZpbGUlMjBwZXJzb24lMjBzaWxob3VldHRlfGVufDF8fHx8MTc1NjY4ODI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>


              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">JOSEPH88</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  꿈과 열정으로 가득한<br />
                  나만의 이야기를 들려드릴게요
                </p>


                <div className="flex justify-center gap-4 pt-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Camera size={16} className="text-blue-500" />
                    <span className="text-sm font-medium">사진</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="text-blue-500" />
                    <span className="text-sm font-medium">여행</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Heart size={16} className="text-blue-500" />
                    <span className="text-sm font-medium">스토리</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>


        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">함께 소통해요!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              새로운 여행 이야기와 프로젝트에 대해 언제든 연락주세요
            </p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              프로젝트 문의하기
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}