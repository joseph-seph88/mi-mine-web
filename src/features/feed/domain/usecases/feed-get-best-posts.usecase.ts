import { FeedRepository } from "../repositories/feed.repository";
import { FeedPost } from "../entities/feed-post";

export class FeedGetBestPostsUsecase {
    private readonly repository: FeedRepository;

    constructor(repository: FeedRepository) {
        this.repository = repository;
    }

    async execute(): Promise<FeedPost[]> {
        return await this.repository.getBestPosts();
    }
}


