import { apiClient } from "@/lib/network/api-client";
import { BffPath } from "@/lib/constants/path/bff-path";
import { ImagePath } from "@/lib/constants/path/image-path";
import { FeedRepository } from "../../domain/repositories/feed.repository";
import { FeedPost } from "../../domain/entities/feed-post";

export class FeedRepositoryImpl implements FeedRepository {
    async getAllPosts(): Promise<any[]> {
        try {
            const response = await apiClient.get(BffPath.POSTS_ALL);
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

    async getBestPosts(): Promise<any[]> {
        try {
            const response = await apiClient.get(BffPath.POSTS_BEST);
            return response.data;
        } catch (error) {
            const now = new Date().toISOString();
            return [
                {
                    postId: 201,
                    title: '목데이터: 인기 피드 1',
                    content: '인기 게시글입니다.',
                    imageUrl: ImagePath.MIMINE_LOGO,
                    userId: 'mock-user-1',
                    likeCount: 200,
                    commentCount: 2,
                    createdAt: now,
                    updatedAt: now,
                },
            ];
        }
    }

    async getMyPosts(userId: string): Promise<any[]> {
        try {
            const response = await apiClient.get(BffPath.POSTS_MY, { params: { userId } });
            return response.data;
        } catch (error) {
            const now = new Date().toISOString();
            return [
                {
                    postId: 301,
                    title: '목데이터: 내 글 1',
                    content: '내 게시글 목데이터입니다.',
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


