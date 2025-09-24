import { HomePost } from "../entities/home-post";
import { HomeRepository } from "../repositories/home.repository";

export class HomeGetPostUsecase {
    constructor(private homeRepository: HomeRepository) {}

    async execute(): Promise<HomePost[]> {
        const postInfo = await this.homeRepository.getPopularPosts();
        return postInfo.map((post: any) => HomePost.fromResponse(post));
    }
}