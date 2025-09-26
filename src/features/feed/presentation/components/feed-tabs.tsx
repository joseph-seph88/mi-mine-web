import React from 'react';

interface FeedTabsProps {
    active: 'all' | 'mine';
    onChange: (value: 'all' | 'mine') => void;
}

export function FeedTabs({ active, onChange }: FeedTabsProps) {
    return (
        <div className="inline-flex items-center rounded-lg border border-gray-200 dark:border-gray-800 p-1 bg-gray-50 dark:bg-gray-900">
            <button
                className={`px-4 py-2 text-sm rounded-md ${active === 'all' ? 'bg-white dark:bg-black shadow font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => onChange('all')}
            >
                전체 게시글
            </button>
            <button
                className={`ml-1 px-4 py-2 text-sm rounded-md ${active === 'mine' ? 'bg-white dark:bg-black shadow font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => onChange('mine')}
            >
                내 게시글
            </button>
        </div>
    );
}


