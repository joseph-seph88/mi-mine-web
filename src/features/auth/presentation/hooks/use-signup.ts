import { useState } from 'react';
import { UserSignup } from '../../domain/entities/user-signup';
import { AuthRepositoryImpl } from '../../infrastructure/repositories/auth.repository.impl';
import { AuthSignupUsecase } from '../../domain/usecases/auth-signup.usecase';

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const repo = new AuthRepositoryImpl();
  const usecase = new AuthSignupUsecase(repo);

  const signup = async (data: UserSignup) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await usecase.execute(data);
      setSuccess(true);
      return true;
    } catch (e: any) {
      setError(e?.message ?? '회원가입에 실패했습니다.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
}
