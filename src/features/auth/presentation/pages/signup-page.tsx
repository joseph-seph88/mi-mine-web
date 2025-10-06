'use client';

import { useState } from 'react';
import { SignupForm } from '../components/signup-form';
import { LogoBadge } from '@/ui/components/logo-badge';
import { AuthModal } from '@/ui/components/auth-modal';

export default function SignupPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <LogoBadge 
              src="/images/mimine_logo.png"
              alt="MIMINE 로고"
              size="lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            MIMINE 가입하기
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            새로운 여행의 시작을 함께해요
          </p>
        </div>

        <SignupForm />

        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            이미 계정이 있으신가요?{' '}
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="text-black dark:text-white font-semibold hover:underline"
            >
              로그인하기
            </button>
          </p>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}
