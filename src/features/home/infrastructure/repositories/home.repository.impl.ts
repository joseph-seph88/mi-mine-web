import { BffPath } from "@/lib/constants/path/bff-path";
import { HomeRepository } from "../../domain/repositories/home.repository";
import { apiClient } from "@/lib/network/api-client";
import { ImagePath } from "@/lib/constants/path/image-path";

export class HomeRepositoryImpl implements HomeRepository {
    async getPopularPosts(): Promise<any> {
        try {
            const response = await apiClient.get(BffPath.POSTS_BEST);
            return response.data;
        } catch (error) {
            const now = new Date().toISOString();

            return [
                {
                    postId: 1,
                    title: '목데이터: 요즘 뜨는 맛집 투어',
                    content: '테스트용 내용입니다.',
                    imageUrl: ImagePath.MIMINE_LOGO,
                    userId: 'mock-user-1',
                    likeCount: 30,
                    commentCount: 3,
                    createdAt: now,
                    updatedAt: now,
                    latitude: 37.5665,
                    longitude: 126.9780,
                },
                {
                    postId: 2,
                    title: '목데이터: 주말 근교 여행 코스',
                    content: '샘플 포스트입니다.',
                    imageUrl: ImagePath.MIMINE_LOGO,
                    userId: 'mock-user-2',
                    likeCount: 25,
                    commentCount: 1,
                    createdAt: now,
                    updatedAt: now,
                },
                {
                    postId: 3,
                    title: '목데이터: 카페 추천',
                    content: '샘플 포스트입니다.',
                    imageUrl: ImagePath.MIMINE_LOGO,
                    userId: 'mock-user-3',
                    likeCount: 20,
                    commentCount: 1,
                    createdAt: now,
                    updatedAt: now,
                },
            ];
        }
    }
}