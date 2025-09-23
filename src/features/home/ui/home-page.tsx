'use client';

import React from 'react';
import { HeroSection } from './hero-section';
import { LogoDisplaySection } from './logo-display-section';

export function HomePage() {
    return (
        <div className="flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <HeroSection />
                    <LogoDisplaySection />
                </div>
            </div>
        </div>
    );
}


