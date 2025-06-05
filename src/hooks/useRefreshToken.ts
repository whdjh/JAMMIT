'use client';

import { useEffect } from 'react';
import { refreshAccessToken } from '@/utils/authService';
import { tokenService } from '@/utils/tokenService';

export const useRefreshToken = () => {
  useEffect(() => {
    const access = tokenService.getAccessToken();
    if (!access) {
      refreshAccessToken().catch((error) => {
        console.error('토큰 갱신 실패', error);
      });
    }
  }, []);
};
