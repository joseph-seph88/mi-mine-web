'use client';

import { useQuery } from '@tanstack/react-query';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';

const userService = new UserService();

export const useUserInfo = () => {
    return useQuery<UserEntity, Error>({
        queryKey: ['user', 'info'],
        queryFn: () => userService.getUserInfo(),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: (failureCount, error) => {
            if (error?.message?.includes('401') || error?.message?.includes('unauthorized')) {
                return false;
            }
            return failureCount < 2;
        },
    });
};
