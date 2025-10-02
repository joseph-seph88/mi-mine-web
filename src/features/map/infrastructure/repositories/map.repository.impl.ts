import { MapRepository } from '../../domain/repositories/map.repository';
import { MapPin } from '../../domain/entities/map-pin';
import { FeedRepositoryImpl } from '@/features/feed/infrastructure/repositories/feed.repository.impl';
import { ImagePath } from '@/lib/constants/path/image-path';

export class MapRepositoryImpl implements MapRepository {
    private readonly feedRepository: FeedRepositoryImpl;

    constructor(feedRepository: FeedRepositoryImpl = new FeedRepositoryImpl()) {
        this.feedRepository = feedRepository;
    }

    async getAllPins(): Promise<MapPin[]> {

        try {
            const posts = await this.feedRepository.getAllPosts();

            return posts
                .filter((p: any) => typeof p.latitude === 'number' && typeof p.longitude === 'number')
                .map((p: any) => ({
                    postId: String(p.postId),
                    latitude: p.latitude,
                    longitude: p.longitude,
                    title: p.title,
                    imageUrl: p.imageUrl,
                }));

        } catch (error) {
            return [
                {
                    postId: '201',
                    latitude: 37.5665,
                    longitude: 126.9780,
                    title: '목데이터: 전체 피드 1',
                    imageUrl: ImagePath.MIMINE_LOGO,
                },
            ];

        }

    }
}


