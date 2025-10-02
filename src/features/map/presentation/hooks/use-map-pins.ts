'use client';

import { useQuery } from '@tanstack/react-query';
import { MapGetAllPinsUsecase } from '../../domain/usecases/map-get-all-pins.usecase';

const usecase = new MapGetAllPinsUsecase();

export const useMapPins = () => {
    return useQuery({
        queryKey: ['map', 'pins', 'all'],
        queryFn: () => usecase.execute(),
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
    });
};


