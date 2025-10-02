import { UserSummary } from '../entities/user-summary';

export interface MyRepository {
    getMySummary(): Promise<UserSummary>;
}


