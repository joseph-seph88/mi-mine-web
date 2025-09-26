'use client';

import { useQuery } from '@tanstack/react-query';
import { FeedRepositoryImpl } from '../../infrastructure/repositories/feed.repository.impl';
import { FeedGetMyPostsUsecase } from '../../domain/usecases/feed-get-my-posts.usecase';
import { useUserInfo } from '@/lib/hooks/use-user';

const repository = new FeedRepositoryImpl();
const getMyPostsUsecase = new FeedGetMyPostsUsecase(repository);

export const useFeedMyPosts = () => {
    const { data: user } = useUserInfo();

    return useQuery({
        queryKey: ['feed', 'myPosts', user?.id],
        queryFn: () => getMyPostsUsecase.execute(user!.id),
        enabled: Boolean(user?.id),
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
    });
};


