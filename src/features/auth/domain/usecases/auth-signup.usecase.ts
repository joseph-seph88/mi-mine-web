import { AuthRepository } from '../repositories/auth.repository';
import { UserSignup } from '../entities/user-signup';

export class AuthSignupUsecase {
  constructor(private readonly repo: AuthRepository) {}

  async execute(data: UserSignup): Promise<void> {
    await this.repo.signup(data);
  }
}
