import { apiClient } from "@/lib/network/api-client";
import { ImagePath } from "@/lib/constants/path/image-path";
import { FeedRepository } from "../../domain/repositories/feed.repository";
import { FeedPost } from "../../domain/entities/feed-post";

export class FeedRepositoryImpl implements FeedRepository {
    async getAllPosts(): Promise<any[]> {
        try {
            const response = await apiClient.get('/api/post/all');
            return response.data;
        } catch (error) {
            const now = new Date().toISOString();
            return [
                {
                    postId: 101,
                    title: '목데이터: 전체 피드 1',
                    content: '개발 단계 목데이터입니다.',
                    imageUrl: ImagePath.MIMINE_LOGO,
                    userId: 'mock-user-1',
                    likeCount: 12,
                    commentCount: 0,
                    createdAt: now,
                    updatedAt: now,
                    latitude: 37.5665,
                    longitude: 126.9780,
                },
                {
                    postId: 102,
                    title: '목데이터: 전체 피드 2',
                    content: '샘플 데이터입니다.',
                    imageUrl: ImagePath.MIMINE_LOGO,
                    userId: 'mock-user-2',
                    likeCount: 5,
                    commentCount: 2,
                    createdAt: now,
                    updatedAt: now,
                },
            ];
        }
    }

    async getMinePosts(userId: string): Promise<any[]> {
        try {
            const response = await apiClient.get(`/api/post/mine?userId=${encodeURIComponent(userId)}`);
            return response.data;
        } catch (error) {
            const now = new Date().toISOString();
            return [
                {
                    postId: 201,
                    title: '목데이터: 내 피드 1',
                    content: '나의 게시글입니다.',
                    imageUrl: ImagePath.MIMINE_LOGO,
                    userId,
                    likeCount: 1,
                    commentCount: 0,
                    createdAt: now,
                    updatedAt: now,
                },
            ];
        }
    }
}


