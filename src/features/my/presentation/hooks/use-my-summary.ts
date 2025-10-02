'use client';

import { useQuery } from '@tanstack/react-query';
import { GetMySummaryUsecase } from '../../domain/usecases/get-my-summary.usecase';

const usecase = new GetMySummaryUsecase();

export const useMySummary = () => {
    return useQuery({
        queryKey: ['my', 'summary'],
        queryFn: () => usecase.execute(),
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
    });
};


