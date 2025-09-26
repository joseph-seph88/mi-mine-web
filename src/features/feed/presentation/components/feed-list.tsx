import React from 'react';
import Image from 'next/image';

interface FeedListProps {
    posts: Array<{
        postId: number;
        title: string;
        content: string;
        imageUrl?: string;
        userId: string;
        likeCount: number;
        commentCount: number;
        createdAt: string | Date;
    }>;
}

export function FeedList({ posts }: FeedListProps) {
    if (!posts || posts.length === 0) {
        return (
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                게시글이 없습니다.
            </div>
        );
    }

    return (
        <ul className="space-y-4">
            {posts.map((post) => (
                <li key={post.postId} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                        {post.imageUrl && (
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-50 dark:bg-gray-900">
                                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{post.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{post.content}</p>
                            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                ♥ {post.likeCount} · 💬 {post.commentCount}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}


