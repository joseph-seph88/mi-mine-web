import { UserSignup } from '../entities/user-signup';

export interface AuthRepository {
  signup(data: UserSignup): Promise<void>;
}
