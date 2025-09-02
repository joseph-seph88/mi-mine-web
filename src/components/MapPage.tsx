import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Camera, Star } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
  date: string;
  description: string;
  images: number;
  rating: number;
  color: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: '인천공항',
    coordinates: { x: 15, y: 45 },
    date: '2024.08.15',
    description: '모든 여행의 시작점',
    images: 3,
    rating: 4.5,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    name: '제주도',
    coordinates: { x: 25, y: 85 },
    date: '2024.08.20',
    description: '한라산 일출과 푸른바다',
    images: 12,
    rating: 5.0,
    color: 'from-green-400 to-emerald-600'
  },
  {
    id: 3,
    name: '경주',
    coordinates: { x: 70, y: 60 },
    date: '2024.09.01',
    description: '천년고도의 역사와 문화',
    images: 8,
    rating: 4.8,
    color: 'from-amber-400 to-orange-600'
  },
  {
    id: 4,
    name: '부산',
    coordinates: { x: 80, y: 75 },
    date: '2024.09.10',
    description: '해운대의 아름다운 일몰',
    images: 15,
    rating: 4.9,
    color: 'from-pink-400 to-rose-600'
  },
  {
    id: 5,
    name: '서울',
    coordinates: { x: 35, y: 35 },
    date: '2024.09.20',
    description: '도심 속 숨겨진 보석들',
    images: 20,
    rating: 4.7,
    color: 'from-purple-400 to-indigo-600'
  }
];

export function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            여행 지도
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            지금까지 방문한 곳들을 지도에서 확인하고, 각 장소의 특별한 이야기를 만나보세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 인터랙티브 지도 */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
              {/* 지도 배경 */}
              <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden">
                {/* 격자 패턴 */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* 지역 표시 (한국 형태 간소화) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <motion.path
                    d="M20,30 Q25,25 35,30 L40,25 Q45,20 55,25 L65,30 Q70,35 75,40 L80,50 Q85,60 80,70 L75,80 Q70,85 60,85 L50,90 Q40,85 30,80 L25,70 Q20,60 20,50 Z"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>

                {/* 여행 경로 연결선 */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <motion.path
                    d={`M${locations[0].coordinates.x},${locations[0].coordinates.y} 
                        Q${(locations[0].coordinates.x + locations[1].coordinates.x) / 2},${(locations[0].coordinates.y + locations[1].coordinates.y) / 2 - 10} 
                        ${locations[1].coordinates.x},${locations[1].coordinates.y}
                        Q${(locations[1].coordinates.x + locations[2].coordinates.x) / 2},${(locations[1].coordinates.y + locations[2].coordinates.y) / 2 - 10} 
                        ${locations[2].coordinates.x},${locations[2].coordinates.y}
                        Q${(locations[2].coordinates.x + locations[3].coordinates.x) / 2},${(locations[2].coordinates.y + locations[3].coordinates.y) / 2 + 5} 
                        ${locations[3].coordinates.x},${locations[3].coordinates.y}
                        Q${(locations[3].coordinates.x + locations[4].coordinates.x) / 2 - 10},${(locations[3].coordinates.y + locations[4].coordinates.y) / 2 - 15} 
                        ${locations[4].coordinates.x},${locations[4].coordinates.y}`}
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#EC4899" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* 위치 마커들 */}
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
                    onHoverStart={() => setHoveredLocation(location.id)}
                    onHoverEnd={() => setHoveredLocation(null)}
                    onClick={() => setSelectedLocation(location)}
                    whileHover={{ scale: 1.3, z: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className={`relative w-8 h-8 bg-gradient-to-r ${location.color} rounded-full shadow-lg border-2 border-white/30`}
                      animate={hoveredLocation === location.id ? {
                        boxShadow: [
                          "0 0 0 0 rgba(255, 255, 255, 0.4)",
                          "0 0 0 10px rgba(255, 255, 255, 0)",
                          "0 0 0 0 rgba(255, 255, 255, 0)"
                        ]
                      } : {}}
                      transition={{ duration: 1.5, repeat: hoveredLocation === location.id ? Infinity : 0 }}
                    >
                      <MapPin className="absolute inset-0 m-auto text-white" size={16} />
                    </motion.div>

                    {/* 위치 라벨 */}
                    <AnimatePresence>
                      {(hoveredLocation === location.id || selectedLocation?.id === location.id) && (
                        <motion.div
                          className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 whitespace-nowrap z-20"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <div className="text-white text-sm font-medium">{location.name}</div>
                          <div className="text-white/70 text-xs">{location.date}</div>
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* 펄스 애니메이션 */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${location.color} rounded-full opacity-20`}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.2, 0, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* 범례 */}
              <motion.div
                className="mt-6 flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span>여행 경로</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin size={14} className="text-white/70" />
                  <span>방문 장소</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 위치 정보 패널 */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">여행 통계</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">총 방문지</span>
                  <span className="text-white font-semibold">{locations.length}곳</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">총 사진</span>
                  <span className="text-white font-semibold">
                    {locations.reduce((sum, loc) => sum + loc.images, 0)}장
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">평균 평점</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">
                      {(locations.reduce((sum, loc) => sum + loc.rating, 0) / locations.length).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 위치 목록 */}
            <div className="space-y-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 cursor-pointer transition-all duration-300 ${selectedLocation?.id === location.id ? 'bg-white/20 border-white/40' : 'hover:bg-white/15'
                    }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedLocation(location)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-medium">{location.name}</h4>
                    <div className={`w-3 h-3 bg-gradient-to-r ${location.color} rounded-full`}></div>
                  </div>

                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      <span>{location.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera size={12} />
                      <span>{location.images}���의 사진</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span>{location.rating}</span>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm mt-2 line-clamp-2">
                    {location.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 선택된 위치 상세 정보 */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-3xl max-w-2xl w-full border border-white/20 overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`h-32 bg-gradient-to-r ${selectedLocation.color} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <h2 className="text-2xl font-bold">{selectedLocation.name}</h2>
                    <p className="text-white/80">{selectedLocation.date}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    {selectedLocation.description}에서의 특별한 순간들을 기록했습니다.
                    이곳에서 만난 새로운 경험들이 아직도 선명하게 기억에 남아있어요.
                  </p>

                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{selectedLocation.images}</div>
                      <div className="text-white/60 text-sm">장의 사진</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-2xl font-bold text-white">{selectedLocation.rating}</span>
                      </div>
                      <div className="text-white/60 text-sm">평점</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">1</div>
                      <div className="text-white/60 text-sm">방문 횟수</div>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedLocation(null)}
                  >
                    발자취 보러가기
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}