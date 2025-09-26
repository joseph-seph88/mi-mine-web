'use client';

import { useQuery } from '@tanstack/react-query';
import { FeedRepositoryImpl } from '../../infrastructure/repositories/feed.repository.impl';
import { FeedGetAllPostsUsecase } from '../../domain/usecases/feed-get-all-posts.usecase';

const repository = new FeedRepositoryImpl();
const getAllPostsUsecase = new FeedGetAllPostsUsecase(repository);

export const useFeedAllPosts = () => {
    return useQuery({
        queryKey: ['feed', 'allPosts'],
        queryFn: () => getAllPostsUsecase.execute(),
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
    });
};


