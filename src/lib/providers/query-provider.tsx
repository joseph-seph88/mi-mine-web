'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

interface QueryProviderProps {
    children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        gcTime: 5 * 60 * 1000,
                        retry: (failureCount, error: any) => {
                            if (error?.response?.status >= 400 && error?.response?.status < 500) {
                                if (error?.response?.status === 408 || error?.response?.status === 429) {
                                    return failureCount < 2;
                                }
                                return false;
                            }
                            return failureCount < 3;
                        },
                        refetchOnWindowFocus: false,
                    },
                    mutations: {
                        retry: 1,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
