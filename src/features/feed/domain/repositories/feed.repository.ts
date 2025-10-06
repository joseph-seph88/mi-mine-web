import { FeedPost } from "../entities/feed-post";

export interface FeedRepository {
    getAllPosts(): Promise<FeedPost[]>;
    getBestPosts(): Promise<FeedPost[]>;
    getMyPosts(userId: string): Promise<FeedPost[]>;
}


