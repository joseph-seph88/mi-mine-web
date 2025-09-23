'use client';

import React from 'react';
import { Header } from '@/shared/ui/layout/header';
import { Footer } from '@/shared/ui/layout/footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <Header />
            <main className="pt-20 pb-40">
                {children}
            </main>
            <Footer />
        </div>
    );
}


