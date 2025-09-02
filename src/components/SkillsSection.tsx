import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, PenTool, Palette, Code, Globe, Heart, Star } from 'lucide-react';

interface Skill {
    name: string;
    level: number;
    icon: React.ComponentType<any>;
    color: string;
    description: string;
}

const skills: Skill[] = [
    {
        name: '사진 촬영',
        level: 95,
        icon: Camera,
        color: 'from-purple-400 to-purple-600',
        description: '풍경, 인물, 여행 사진 전문'
    },
    {
        name: '영상 편집',
        level: 85,
        icon: Video,
        color: 'from-pink-400 to-pink-600',
        description: '여행 브이로그 및 다큐멘터리'
    },
    {
        name: '여행 글쓰기',
        level: 90,
        icon: PenTool,
        color: 'from-blue-400 to-blue-600',
        description: '여행 에세이 및 가이드 작성'
    },
    {
        name: '디자인',
        level: 80,
        icon: Palette,
        color: 'from-green-400 to-green-600',
        description: 'UI/UX 및 그래픽 디자인'
    },
    {
        name: '웹 개발',
        level: 75,
        icon: Code,
        color: 'from-orange-400 to-orange-600',
        description: 'React, Next.js 기반 웹사이트'
    },
    {
        name: '여행 기획',
        level: 95,
        icon: Globe,
        color: 'from-teal-400 to-teal-600',
        description: '맞춤형 여행 일정 및 가이드'
    }
];

const achievements = [
    {
        icon: Star,
        title: '여행 블로그 운영',
        description: '3년간 지속적인 콘텐츠 제작',
        color: 'text-yellow-400'
    },
    {
        icon: Heart,
        title: '팔로워 10K+',
        description: '소셜미디어 활발한 소통',
        color: 'text-red-400'
    },
    {
        icon: Camera,
        title: '사진 전시회',
        description: '개인 사진전 2회 개최',
        color: 'text-purple-400'
    },
    {
        icon: Globe,
        title: '여행지 50+',
        description: '국내외 다양한 여행 경험',
        color: 'text-blue-400'
    }
];

export function SkillsSection() {
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
                        나의 전문성
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        여행과 크리에이팅에 대한 열정과 전문성을 소개합니다
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* 스킬 섹션 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8">주요 스킬</h2>
                            <div className="space-y-6">
                                {skills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            className="space-y-3"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <motion.div
                                                        className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <Icon size={20} className="text-white" />
                                                    </motion.div>
                                                    <div>
                                                        <h3 className="text-white font-medium">{skill.name}</h3>
                                                        <p className="text-white/60 text-sm">{skill.description}</p>
                                                    </div>
                                                </div>
                                                <span className="text-white/80 font-semibold">{skill.level}%</span>
                                            </div>

                                            <div className="w-full bg-white/10 rounded-full h-2">
                                                <motion.div
                                                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* 성과 섹션 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8">주요 성과</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {achievements.map((achievement, index) => {
                                    const Icon = achievement.icon;
                                    return (
                                        <motion.div
                                            key={achievement.title}
                                            className="bg-white/5 rounded-2xl p-6 border border-white/10"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                            whileHover={{
                                                scale: 1.05,
                                                rotateY: 5,
                                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                                            }}
                                            style={{ transformStyle: 'preserve-3d' }}
                                        >
                                            <motion.div
                                                className={`w-12 h-12 bg-gradient-to-r from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-4`}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Icon size={24} className={achievement.color} />
                                            </motion.div>
                                            <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                                            <p className="text-white/60 text-sm">{achievement.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA 섹션 */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            함께 프로젝트를 만들어보실까요?
                        </h3>
                        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                            여행 콘텐츠 제작, 웹사이트 개발, 또는 특별한 프로젝트에 대해
                            언제든지 연락주세요. 새로운 도전을 기다리고 있습니다!
                        </p>
                        <motion.button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(139, 92, 246, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            프로젝트 문의하기
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
