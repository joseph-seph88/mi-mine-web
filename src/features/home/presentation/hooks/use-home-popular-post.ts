'use client';

import { useQuery } from '@tanstack/react-query';
import { HomeGetPostUsecase } from '../../domain/usecases/home-get-post.usecase';
import { HomeRepositoryImpl } from '../../infrastructure/repositories/home.repository.impl';

const homeRepository = new HomeRepositoryImpl();
const getPopularPostsUsecase = new HomeGetPostUsecase(homeRepository);

export const useHomePopularPost = () => {
    return useQuery({
        queryKey: ['home', 'popularPosts'],
        queryFn: () => getPopularPostsUsecase.execute(),
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
    });
};
