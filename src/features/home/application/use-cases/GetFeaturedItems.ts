import { FeaturedItem } from '../../domain/entities/FeaturedItem';
import { FeaturedItemRepository } from '../ports/FeaturedItemRepository';

export class GetFeaturedItems {
    private readonly repository: FeaturedItemRepository;

    constructor(repository: FeaturedItemRepository) {
        this.repository = repository;
    }

    async execute(): Promise<FeaturedItem[]> {
        return this.repository.getFeaturedItems();
    }
}


