'use client';

import { motion } from 'framer-motion';
import { TrendingUp, RefreshCw, Heart, MessageCircle, Clock } from 'lucide-react';
import Image from 'next/image';
import { useHomePopularPost } from '../hooks/use-home-popular-post';

export function HomeRightSection() {
    const { data, isLoading, isFetching, error, refetch } = useHomePopularPost();
    const postList = data ?? [];

    const formatDate = (dateValue: Date) => {
        try {
            const date = new Date(dateValue);
            return date.toLocaleDateString();
        } catch (_) {
            return '';
        }
    };

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <motion.div
                className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl max-h-[600px] overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
            >
                {/* 헤더 */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            인기 포스트
                        </h2>
                    </div>
                    <button
                        onClick={() => refetch()}
                        disabled={isFetching}
                        className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                    >
                        <RefreshCw className={`w-4 h-4 text-gray-600 dark:text-gray-400 ${isFetching ? 'animate-spin' : ''}`} />
                    </button>
                </div>

                {/* 로딩 상태 */}
                {isLoading && (
                    <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    </div>
                )}

                {/* 에러 상태 */}
                {!!error && (
                    <div className="text-center py-12">
                        <p className="text-red-500 dark:text-red-400 mb-4">데이터를 불러오는 중 오류가 발생했습니다.</p>
                        <button
                            onClick={() => refetch()}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            다시 시도
                        </button>
                    </div>
                )}

                {/* 포스트 목록 */}
                {!isLoading && !error && postList.length > 0 && (
                    <div className="overflow-y-auto max-h-[480px] pr-2">
                        <div className="space-y-4">
                            {postList.map((post, index) => (
                                <motion.div
                                    key={post.postId}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-start gap-3">
                                        {/* 포스트 내용 */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {formatDate(post.createdAt)}
                                                </span>
                                            </div>

                                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2">
                                                {post.title}
                                            </h4>

                                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                                                {post.content}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                                    <div className="flex items-center gap-1">
                                                        <Heart className="w-3 h-3" />
                                                        <span>{post.likeCount}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MessageCircle className="w-3 h-3" />
                                                        <span>{post.commentCount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 썸네일 이미지 */}
                                        {post.imageUrl && (
                                            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                                                <Image
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    width={64}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 빈 상태 */}
                {!isLoading && !error && postList.length === 0 && (
                    <div className="text-center py-12">
                        <TrendingUp className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-500 dark:text-gray-400">
                            아직 인기 포스트가 없습니다.
                        </p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}


