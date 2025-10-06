"use client";

import { MainLayout } from '@/ui/layout/main-layout';
import dynamic from 'next/dynamic';
import { useMapPins } from '../hooks/use-map-pins';

const NaverMap = dynamic(() => import('../components/naver-map'), { 
    ssr: false,
    loading: () => (
        <div className="w-full h-[520px] flex items-center justify-center border rounded">
            <div className="text-center">
                <div className="text-lg font-medium text-gray-700 dark:text-gray-300">지도를 불러오는 중...</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">잠시만 기다려주세요</div>
            </div>
        </div>
    )
});

export default function MapFeaturePage() {
    const { data: pins } = useMapPins();

    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold mb-6">Map</h1>
                <NaverMap
                    latitude={37.5665}
                    longitude={126.9780}
                    zoom={13}
                    height={520}
                    markers={(pins ?? []).map((p) => ({ id: p.postId, latitude: p.latitude, longitude: p.longitude }))}
                />
            </div>
        </MainLayout>
    );
}


