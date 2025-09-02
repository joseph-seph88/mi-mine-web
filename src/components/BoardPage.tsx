import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Heart, Reply, Send, User, Clock, ThumbsUp } from 'lucide-react';
// UI 컴포넌트들을 간단한 HTML 요소로 교체

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  replies: Reply[];
  avatar?: string;
}

interface Reply {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
}

const mockComments: Comment[] = [
  {
    id: 1,
    author: '여행러버',
    content: '와 정말 멋진 여행이네요! 특히 한라산 일출 사진이 정말 인상적이에요. 저도 다음에 꼭 가보고 싶어졌어요 ✨',
    date: '2시간 전',
    likes: 12,
    replies: [
      {
        id: 101,
        author: '블로그주인',
        content: '감사해요! 한라산 일출은 정말 추천드려요. 힘들지만 그만한 가치가 있답니다 😊',
        date: '1시간 전',
        likes: 3
      }
    ]
  },
  {
    id: 2,
    author: '사진작가김',
    content: '사진 정말 잘 찍으시네요! 특히 색감이나 구도가 전문가 수준이에요. 어떤 카메라 사용하시나요?',
    date: '5시간 전',
    likes: 8,
    replies: []
  },
  {
    id: 3,
    author: '제주도네이티브',
    content: '제주도 사진들 보니 고향이 그리워지네요 🏝️ 황리단길도 요즘 정말 핫한 곳이죠! 맛집 추천도 해주세요~',
    date: '1일 전',
    likes: 15,
    replies: [
      {
        id: 301,
        author: '블로그주인',
        content: '제주도 정말 아름다운 곳이에요! 맛집 정보는 다음 포스팅에서 자세히 다뤄볼게요 🍽️',
        date: '23시간 전',
        likes: 5
      },
      {
        id: 302,
        author: '맛집헌터',
        content: '저도 맛집 정보 기대하고 있어요! 특히 현지인이 추천하는 숨은 맛집이 궁금해요',
        date: '20시간 전',
        likes: 2
      }
    ]
  }
];

export function BoardPage() {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());

  const handleSubmitComment = () => {
    if (!newComment.trim() || !newName.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: newName,
      content: newComment,
      date: '방금 전',
      likes: 0,
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setNewName('');
  };

  const handleSubmitReply = (commentId: number) => {
    if (!replyContent.trim() || !newName.trim()) return;

    const reply: Reply = {
      id: Date.now(),
      author: newName,
      content: replyContent,
      date: '방금 전',
      likes: 0
    };

    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    ));

    setReplyContent('');
    setReplyingTo(null);
  };

  const handleLike = (commentId: number) => {
    const newLikedComments = new Set(likedComments);

    if (likedComments.has(commentId)) {
      newLikedComments.delete(commentId);
      setComments(comments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes - 1 }
          : comment
      ));
    } else {
      newLikedComments.add(commentId);
      setComments(comments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      ));
    }

    setLikedComments(newLikedComments);
  };

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
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
            소통하는 공간
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            여행 이야기를 나누고, 서로의 경험을 공유하며 새로운 인연을 만들어가요
          </p>
        </motion.div>

        {/* 댓글 작성 폼 */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ perspective: '1000px' }}
        >
          <motion.h2
            className="text-2xl font-semibold text-white mb-6 flex items-center gap-3"
            whileHover={{ rotateX: -5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="text-purple-400" />
            </motion.div>
            댓글 남기기
          </motion.h2>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none rounded-xl transition-all duration-300"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                placeholder="여행 이야기나 궁금한 점을 자유롭게 남겨주세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none rounded-xl transition-all duration-300 resize-none"
              />
            </motion.div>

            <motion.div className="flex justify-end">
              <motion.button
                onClick={handleSubmitComment}
                disabled={!newComment.trim() || !newName.trim()}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
                댓글 등록
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* 댓글 목록 */}
        <motion.div className="space-y-6">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/70">
              <MessageCircle size={18} />
              <span>총 {comments.length}개의 댓글</span>
            </div>
          </motion.div>

          <AnimatePresence>
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.01, rotateX: -2 }}
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                {/* 댓글 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <User size={16} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium">{comment.author}</h4>
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <Clock size={12} />
                        <span>{comment.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 댓글 내용 */}
                <motion.p
                  className="text-white/80 leading-relaxed mb-4"
                >
                  {comment.content}
                </motion.p>

                {/* 댓글 액션 */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                  <motion.button
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-2 text-sm transition-colors ${likedComments.has(comment.id)
                      ? 'text-red-400'
                      : 'text-white/60 hover:text-red-400'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      animate={likedComments.has(comment.id) ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart
                        size={16}
                        className={likedComments.has(comment.id) ? 'fill-current' : ''}
                      />
                    </motion.div>
                    <span>{comment.likes}</span>
                  </motion.button>

                  <motion.button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Reply size={16} />
                    <span>답글</span>
                  </motion.button>

                  {comment.replies.length > 0 && (
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <MessageCircle size={14} />
                      <span>{comment.replies.length}개의 답글</span>
                    </div>
                  )}
                </div>

                {/* 답글 작성 폼 */}
                <AnimatePresence>
                  {replyingTo === comment.id && (
                    <motion.div
                      className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="space-y-3">
                        <textarea
                          placeholder="답글을 입력해주세요..."
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none rounded-lg text-sm resize-none"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setReplyingTo(null)}
                            className="px-4 py-2 bg-transparent border border-white/20 text-white/70 hover:bg-white/10 rounded-lg text-sm transition-all duration-300"
                          >
                            취소
                          </button>
                          <button
                            onClick={() => handleSubmitReply(comment.id)}
                            disabled={!replyContent.trim()}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            답글 등록
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 답글 목록 */}
                {comment.replies.length > 0 && (
                  <motion.div
                    className="mt-4 space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {comment.replies.map((reply) => (
                      <motion.div
                        key={reply.id}
                        className="ml-8 p-4 bg-white/5 rounded-xl border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center"
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <User size={12} className="text-white" />
                            </motion.div>
                            <div>
                              <h5 className="text-white font-medium text-sm">{reply.author}</h5>
                              <div className="flex items-center gap-2 text-white/50 text-xs">
                                <Clock size={10} />
                                <span>{reply.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-white/80 text-sm leading-relaxed mb-3">
                          {reply.content}
                        </p>

                        <div className="flex items-center gap-3">
                          <motion.button
                            className="flex items-center gap-1 text-xs text-white/60 hover:text-red-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ThumbsUp size={12} />
                            <span>{reply.likes}</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 빈 상태 */}
        {comments.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              💬
            </motion.div>
            <h3 className="text-2xl font-semibold text-white/80 mb-2">
              첫 번째 댓글을 남겨주세요!
            </h3>
            <p className="text-white/60">
              여행 이야기나 궁금한 점을 자유롭게 공유해주세요.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}