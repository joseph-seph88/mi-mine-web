import { AuthRepository } from '../../domain/repositories/auth.repository';
import { UserSignup } from '../../domain/entities/user-signup';
import { apiClient } from '@/lib/network/api-client';

export class AuthRepositoryImpl implements AuthRepository {
  async signup(data: UserSignup): Promise<void> {
    await apiClient.post('/api/user/signup', data);
  }
}
