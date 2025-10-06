export abstract class HomeRepository {
    abstract getPopularPosts(): Promise<any>;
}