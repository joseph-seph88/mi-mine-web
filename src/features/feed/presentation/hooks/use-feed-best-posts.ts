'use client';

import { useQuery } from '@tanstack/react-query';
import { FeedRepositoryImpl } from '../../infrastructure/repositories/feed.repository.impl';
import { FeedGetBestPostsUsecase } from '../../domain/usecases/feed-get-best-posts.usecase';
import { useUserInfo } from '@/lib/hooks/use-user';

const repository = new FeedRepositoryImpl();
const getBestPostsUsecase = new FeedGetBestPostsUsecase(repository);

export const useFeedMyPosts = () => {
    const { data: user } = useUserInfo();

    return useQuery({
        queryKey: ['feed', 'bestPosts', user?.id],
        queryFn: () => getBestPostsUsecase.execute(),
        enabled: Boolean(user?.id),
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
    });
};


