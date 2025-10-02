"use client";

import { MainLayout } from '@/ui/layout/main-layout';
import dynamic from 'next/dynamic';
import { useMapPins } from '../hooks/use-map-pins';

const NaverMap = dynamic(() => import('../components/naver-map'), { ssr: false });

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


