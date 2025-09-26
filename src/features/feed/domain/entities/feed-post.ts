export class FeedPost {
    postId: number;
    title: string;
    content: string;
    imageUrl?: string;
    userId: string;
    likeCount: number;
    commentCount: number;
    createdAt: Date;
    updatedAt: Date;
    latitude?: number;
    longitude?: number;

    constructor(data: {
        postId: number;
        title: string;
        content: string;
        imageUrl?: string;
        userId: string;
        likeCount: number;
        commentCount: number;
        createdAt: Date;
        updatedAt: Date;
        latitude?: number;
        longitude?: number;
    }) {
        this.postId = data.postId;
        this.title = data.title;
        this.content = data.content;
        this.imageUrl = data.imageUrl;
        this.userId = data.userId;
        this.likeCount = data.likeCount;
        this.commentCount = data.commentCount;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
    }

    static fromResponse(response: any): FeedPost {
        return new FeedPost({
            postId: response.postId,
            title: response.title,
            content: response.content,
            imageUrl: response.imageUrl,
            userId: response.userId,
            likeCount: response.likeCount,
            commentCount: response.commentCount,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt,
            latitude: response.latitude,
            longitude: response.longitude,
        });
    }
}


