import React from 'react';

interface FeedTabsProps {
    active: 'all' | 'best';
    onChange: (value: 'all' | 'best') => void;
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
                className={`ml-1 px-4 py-2 text-sm rounded-md ${active === 'best' ? 'bg-white dark:bg-black shadow font-medium' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => onChange('best')}
            >
                인기 게시글
            </button>
        </div>
    );
}


