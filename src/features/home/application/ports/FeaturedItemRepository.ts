import { FeaturedItem } from '../../domain/entities/FeaturedItem';

export interface FeaturedItemRepository {
    getFeaturedItems(): Promise<FeaturedItem[]>;
}


