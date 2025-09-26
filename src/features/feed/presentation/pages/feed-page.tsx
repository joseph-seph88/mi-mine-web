"use client";
import React from 'react';
import { FeedTabs } from '../components/feed-tabs';
import { FeedList } from '../components/feed-list';
import { useFeedAllPosts } from '../hooks/use-feed-all-posts';
import { useFeedMyPosts } from '../hooks/use-feed-my-posts';

export function FeedPage() {
    const [active, setActive] = React.useState<'all' | 'mine'>('all');
    const allQuery = useFeedAllPosts();
    const mineQuery = useFeedMyPosts();

    const isLoading = active === 'all' ? allQuery.isLoading : mineQuery.isLoading;
    const posts = active === 'all' ? (allQuery.data || []) : (mineQuery.data || []);

    return (
        <div className="flex items-center justify-center px-4 py-12">
            <div className="max-w-3xl mx-auto w-full">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">피드</h2>
                    <FeedTabs active={active} onChange={setActive} />
                </div>

                {isLoading ? (
                    <div className="text-sm text-gray-500 dark:text-gray-400">불러오는 중...</div>
                ) : (
                    <FeedList posts={posts as any[]} />
                )}
            </div>
        </div>
    );
}


