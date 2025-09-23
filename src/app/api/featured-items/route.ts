import { NextResponse } from 'next/server';
import { FeaturedItemRepositoryHttp } from '@/features/home/infrastructure/http/FeaturedItemRepositoryHttp';
import { GetFeaturedItems } from '@/features/home/application/use-cases/GetFeaturedItems';
import { GetFeaturedItemsController } from '@/features/home/interface/controllers/GetFeaturedItemsController';

export async function GET() {
    const repo = new FeaturedItemRepositoryHttp();
    const useCase = new GetFeaturedItems(repo);
    const controller = new GetFeaturedItemsController(useCase);
    const data = await controller.handle();

    // For demo, if no backend, return mock data
    if (!Array.isArray(data) || data.length === 0) {
        return NextResponse.json([
            { id: '1', title: '핫한 맛집 10선', category: '맛집' },
            { id: '2', title: '주말 당일치기 여행', category: '여행지' },
            { id: '3', title: '봄 페스티벌 라인업', category: '페스티벌' },
        ]);
    }

    return NextResponse.json(data);
}


