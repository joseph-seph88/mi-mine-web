import { MyRepository } from '../../domain/repositories/my.repository';
import { UserSummary } from '../../domain/entities/user-summary';
import { UserService } from '@/lib/services/user.service';

export class MyRepositoryImpl implements MyRepository {
    private readonly userService: UserService;

    constructor(userService: UserService = new UserService()) {
        this.userService = userService;
    }

    async getMySummary(): Promise<UserSummary> {
        const me = await this.userService.getUserInfo();
        return {
            id: me.id,
            email: me.email,
            nickName: me.nickName,
            profileImageUrl: me.profileImageUrl,
            friendCount: me.friendCount,
            followerCount: me.followerCount,
            postCount: me.postCount,
        };
    }
}


