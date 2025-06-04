'use client';

import { useEffect } from 'react';
import {
  getAccessToken,
  getRefreshTokenFromCookie,
  setAccessToken,
} from '@/utils/token';
import { queryClient } from '@/lib/react-query';

export const useRefreshToken = () => {
  useEffect(() => {
    const access = getAccessToken();
    const refresh = getRefreshTokenFromCookie();

    if (!access && refresh) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/jammit/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken: refresh }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            setAccessToken(json.result.accessToken);
            queryClient.invalidateQueries({ queryKey: ['me'] });
          } else {
            console.log('리프레시 실패');
          }
        })
        .catch(console.error);
    }
  }, []);
};
