"use client";
import { MainLayout } from '@/ui/layout/main-layout';
import { MyProfileCard } from '../components/my-profile-card';
import { MyPostsSection } from '../components/my-posts-section';

export default function MyFeaturePage() {
    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold mb-6">My</h1>
                <MyProfileCard />
                <div className="h-8" />
                <MyPostsSection />
            </div>
        </MainLayout>
    );
}


