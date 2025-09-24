import React from 'react';
import { HomeLeftSection } from '../components/home-left-section';
import { HomeRightSection } from '../components/home-right-section';

export function HomePage() {
    return (
        <div className="flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <HomeLeftSection />
                    <HomeRightSection />
                </div>
            </div>
        </div>
    );
}


