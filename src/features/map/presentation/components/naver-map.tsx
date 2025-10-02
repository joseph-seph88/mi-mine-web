'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        naver: any;
    }
}

type NaverMapMarker = {
    id: string;
    latitude: number;
    longitude: number;
};

type NaverMapProps = {
    latitude?: number;
    longitude?: number;
    zoom?: number;
    height?: number;
    markers?: NaverMapMarker[];
    onMapClick?: (lat: number, lng: number) => void;
    onIdle?: (centerLat: number, centerLng: number, zoom: number) => void;
    submodules?: string[];
};

export default function NaverMap({
    latitude = 37.5665,
    longitude = 126.9780,
    zoom = 14,
    height = 480,
    markers = [],
    onMapClick,
    onIdle,
    submodules = [],
}: NaverMapProps) {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<any | null>(null);
    const markerRef = useRef<any | null>(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const externalMarkersRef = useRef<any[]>([]);

    // 1) Initialize map once after SDK is loaded
    useEffect(() => {
        if (!isScriptLoaded || !mapContainerRef.current || !window.naver?.maps) return;
        if (mapRef.current) return; // already initialized

        const center = new window.naver.maps.LatLng(latitude, longitude);
        mapRef.current = new window.naver.maps.Map(mapContainerRef.current, {
            center,
            zoom,
            minZoom: 7,
        });

        markerRef.current = new window.naver.maps.Marker({
            position: center,
            map: mapRef.current,
        });

        if (onMapClick) {
            window.naver.maps.Event.addListener(mapRef.current, 'click', (e: any) => {
                const lat = e.coord._lat ?? e.coord.y;
                const lng = e.coord._lng ?? e.coord.x;
                onMapClick(lat, lng);
            });
        }

        if (onIdle) {
            window.naver.maps.Event.addListener(mapRef.current, 'idle', () => {
                const c = mapRef.current!.getCenter();
                const z = mapRef.current!.getZoom();
                onIdle(c._lat ?? c.y, c._lng ?? c.x, z);
            });
        }
    }, [isScriptLoaded]);

    // 2) Update center/zoom when props change
    useEffect(() => {
        if (!isScriptLoaded || !mapRef.current || !window.naver?.maps) return;
        const center = new window.naver.maps.LatLng(latitude, longitude);
        mapRef.current.setCenter(center);
        if (typeof zoom === 'number') {
            mapRef.current.setZoom(zoom);
        }
        if (markerRef.current) {
            markerRef.current.setPosition(center);
        }
    }, [isScriptLoaded, latitude, longitude, zoom]);

    // 3) Render external markers when props change
    useEffect(() => {
        if (!isScriptLoaded || !mapRef.current || !window.naver?.maps) return;
        externalMarkersRef.current.forEach((m) => m.setMap(null));
        externalMarkersRef.current = [];
        markers.forEach((m) => {
            const marker = new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(m.latitude, m.longitude),
                map: mapRef.current,
            });
            externalMarkersRef.current.push(marker);
        });
    }, [isScriptLoaded, markers]);

    const clientId = process.env.NAVER_MAP_CLIENT_ID ?? process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID;
    if (typeof window !== 'undefined') {
        console.log('NaverMap env check', { origin: window.location.origin, clientId });
    }

    if (!clientId) {
        return (
            <div style={{ width: '100%', height }} className="flex items-center justify-center border rounded">
                <div className="text-sm text-gray-600 dark:text-gray-400">네이버 지도 clientId가 설정되지 않았습니다.</div>
            </div>
        );
    }

    const handleLocateMe = () => {
        if (!navigator.geolocation || !window.naver?.maps || !mapRef.current) return;
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;
                const latLng = new window.naver.maps.LatLng(lat, lng);
                mapRef.current.setCenter(latLng);
                if (markerRef.current) {
                    markerRef.current.setPosition(latLng);
                } else {
                    markerRef.current = new window.naver.maps.Marker({ position: latLng, map: mapRef.current });
                }
            },
            () => {
            },
            { enableHighAccuracy: true, timeout: 8000 }
        );
    };

    return (
        <>
            <Script
                src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}${submodules.length ? `&submodules=${submodules.join(',')}` : ''}`}
                strategy="afterInteractive"
                onLoad={() => setIsScriptLoaded(true)}
                onError={() => {
                    console.error('네이버 지도 SDK 로드 실패. clientId나 허용 도메인을 확인하세요.');
                }}
            />
            <div style={{ position: 'relative' }}>
                <div
                    ref={mapContainerRef}
                    style={{ width: '100%', height }}
                />
                <button
                    type="button"
                    onClick={handleLocateMe}
                    style={{
                        position: 'absolute',
                        right: 12,
                        top: 12,
                        zIndex: 5,
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: 8,
                        padding: '6px 10px',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
                    }}
                >
                    현재 위치
                </button>
            </div>
        </>
    );
}


