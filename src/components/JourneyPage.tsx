import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, Share, X, Calendar, MapPin } from 'lucide-react';
// ImageWithFallback을 일반 img 태그로 교체

type ContentType = 'all' | 'photo' | 'video' | 'story';

interface JourneyItem {
  id: number;
  type: 'photo' | 'video' | 'story';
  title: string;
  content: string;
  image?: string;
  date: string;
  location: string;
  likes: number;
  comments: number;
}

const journeyData: JourneyItem[] = [
  {
    id: 1,
    type: 'photo',
    title: '새로운 여행의 시작',
    content: '모든 여행은 한 걸음부터 시작됩니다. 설렘과 기대감을 가득 안고 떠나는 이 순간이 가장 소중해요.',
    image: 'https://images.unsplash.com/photo-1565982369439-2072eee9168a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBqb3VybmV5JTIwbWVtb3JpZXN8ZW58MXx8fHwxNzU2Njg4Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024년 8월 15일',
    location: '인천공항',
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    type: 'video',
    title: '산정상에서의 일출',
    content: '새벽 4시에 시작한 등반, 힘들었지만 이 순간을 위해서라면 언제든 다시 할 수 있어요.',
    image: 'https://images.unsplash.com/photo-1631684181713-e697596d2165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTY2Mjc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024년 8월 20일',
    location: '한라산',
    likes: 42,
    comments: 15
  },
  {
    id: 3,
    type: 'story',
    title: '바다에서 만난 사람들',
    content: '여행에서 만나는 사람들은 특별합니다. 낯선 곳에서 나눈 따뜻한 대화와 웃음이 아직도 기억에 남아있어요. 때로는 언어가 통하지 않아도 마음으로 소통할 수 있다는 걸 배웠습니다.',
    image: 'https://images.unsplash.com/photo-1627615706915-78af9f50d650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHN1bnNldCUyMGJlYWNofGVufDF8fHx8MTc1NjYzNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024년 8월 25일',
    location: '제주도 해변',
    likes: 18,
    comments: 12
  },
  {
    id: 4,
    type: 'photo',
    title: '골목길의 발견',
    content: '계획에 없던 골목길에서 찾은 작은 카페. 예상치 못한 발견이 여행을 더욱 특별하게 만들어줍니다.',
    date: '2024년 9월 1일',
    location: '경주 황리단길',
    likes: 31,
    comments: 6
  }
];

export function JourneyPage() {
  const [selectedType, setSelectedType] = useState<ContentType>('all');
  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null);

  const filteredData = selectedType === 'all'
    ? journeyData
    : journeyData.filter(item => item.type === selectedType);

  const typeFilters = [
    { type: 'all' as ContentType, label: '전체', icon: '📋' },
    { type: 'photo' as ContentType, label: '사진', icon: '📸' },
    { type: 'video' as ContentType, label: '영상', icon: '🎥' },
    { type: 'story' as ContentType, label: '이야기', icon: '📖' },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-12"
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
            나의 발자취
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            사진, 영상, 그리고 이야기로 기록된 소중한 순간들을 함께 나누고 싶어요
          </p>
        </motion.div>

        {/* 필터 버튼 */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
            {typeFilters.map((filter) => (
              <motion.button
                key={filter.type}
                onClick={() => setSelectedType(filter.type)}
                className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${selectedType === filter.type
                  ? 'text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span>{filter.icon}</span>
                  <span>{filter.label}</span>
                </span>

                {selectedType === filter.type && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-xl -z-10"
                    layoutId="activeFilter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 콘텐츠 그리드 */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-xl"
                  whileHover={{
                    rotateX: -5,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* 이미지/비디오 영역 */}
                  <div className="relative h-48 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                        <span className="text-6xl opacity-50">📖</span>
                      </div>
                    )}

                    {/* 타입 표시 */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.type === 'video' && <Play size={12} className="text-white" />}
                        {item.type === 'photo' && <span className="text-white text-xs">📸</span>}
                        {item.type === 'story' && <span className="text-white text-xs">📖</span>}
                        <span className="text-white text-xs capitalize">{item.type}</span>
                      </motion.div>
                    </div>

                    {/* 호버 오버레이 */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>

                  {/* 콘텐츠 영역 */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2">
                        {item.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-white/60 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="flex items-center gap-4 text-white/60 text-sm">
                        <div className="flex items-center gap-1">
                          <Heart size={14} />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                      <motion.button
                        className="text-white/60 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 상세 모달 */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {selectedItem.image && (
                    <div className="h-64 md:h-96 overflow-hidden rounded-t-3xl">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <motion.button
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                    onClick={() => setSelectedItem(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedItem.title}
                    </h2>

                    <div className="flex items-center gap-6 text-white/60">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{selectedItem.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{selectedItem.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed text-lg">
                    {selectedItem.content}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-6">
                      <motion.button
                        className="flex items-center gap-2 text-white/70 hover:text-red-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart size={20} />
                        <span>{selectedItem.likes}</span>
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle size={20} />
                        <span>{selectedItem.comments}</span>
                      </motion.button>
                    </div>
                    <motion.button
                      className="flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share size={20} />
                      <span>공유</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}