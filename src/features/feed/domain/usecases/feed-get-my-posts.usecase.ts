import { FeedRepository } from "../repositories/feed.repository";
import { FeedPost } from "../entities/feed-post";

export class FeedGetMyPostsUsecase {
    private readonly repository: FeedRepository;

    constructor(repository: FeedRepository) {
        this.repository = repository;
    }

    async execute(userId: string): Promise<FeedPost[]> {
        return await this.repository.getMinePosts(userId);
    }
}


