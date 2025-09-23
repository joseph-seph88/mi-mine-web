import { FeaturedItem } from '../../domain/entities/FeaturedItem';
import { FeaturedItemRepository } from '../../application/ports/FeaturedItemRepository';
import { httpClient } from '@/shared/infrastructure/http/client';

type FeaturedItemDTO = {
    id: string;
    title: string;
    category: string;
};

export class FeaturedItemRepositoryHttp implements FeaturedItemRepository {
    async getFeaturedItems(): Promise<FeaturedItem[]> {
        const data = await httpClient.request<FeaturedItemDTO[]>(`/api/featured-items`, { method: 'GET' });
        return data.map((d) => new FeaturedItem({ id: d.id, title: d.title, category: d.category }));
    }
}


