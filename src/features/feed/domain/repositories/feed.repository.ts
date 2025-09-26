import { FeedPost } from "../entities/feed-post";

export interface FeedRepository {
    getAllPosts(): Promise<FeedPost[]>;
    getMinePosts(userId: string): Promise<FeedPost[]>;
}


