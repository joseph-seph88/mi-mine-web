import { BffPath } from "../constants/path/bff-path";
import { apiClient } from "../network/api-client";
import { UserEntity } from "../entities/user.entity";

export class UserService {
    async getUserInfo(): Promise<UserEntity> {
        try {
            const response = await apiClient.get(BffPath.USER);
            return this.mapResponseToUserEntity(response.data);
        } catch (error) {
            console.warn('Failed to fetch user info, returning mock data:', error);
            return this.getMockUserData();
        }
    }

    private mapResponseToUserEntity(data: any): UserEntity {
        return {
            id: data.id,
            email: data.email,
            nickName: data.nickName,
            profileImageUrl: data.profileImageUrl,
            friendCount: data.friendCount,
            followerCount: data.followerCount,
            postCount: data.postCount,
            roles: data.roles || ['USER'],
            createdAt: new Date(data.createdAt),
            updatedAt: new Date(data.updatedAt),
            deletedAt: data.deletedAt ? new Date(data.deletedAt) : null,
            friendIdList: data.friendIdList || [],
            followerIdList: data.followerIdList || [],
        };
    }

    private getMockUserData(): UserEntity {
        const now = new Date();

        return {
            id: 'mock-user-id',
            email: 'mock@example.com',
            nickName: '모크유저',
            profileImageUrl: '/images/mimine_logo.png',
            friendCount: 5,
            followerCount: 10,
            postCount: 2,
            roles: ['USER'],
            createdAt: now,
            updatedAt: now,
            deletedAt: null,
            friendIdList: ['f1', 'f2'],
            followerIdList: ['u1', 'u2'],
        };
    }
}