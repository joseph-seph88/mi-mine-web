import { MyRepository } from '../repositories/my.repository';
import { UserSummary } from '../entities/user-summary';
import { MyRepositoryImpl } from '../../infrastructure/repositories/my.repository.impl';

export class GetMySummaryUsecase {
    private readonly repository: MyRepository;

    constructor(repository: MyRepository = new MyRepositoryImpl()) {
        this.repository = repository;
    }

    async execute(): Promise<UserSummary> {
        return this.repository.getMySummary();
    }
}


