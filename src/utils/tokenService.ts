import Cookies from 'js-cookie';
import { useAuthStore } from '@/stores/useAuthStore';

export const tokenService = {
  getAccessToken(): string | null {
    return useAuthStore.getState().accessToken;
  },

  setAccessToken(token: string): void {
    useAuthStore.getState().setTokens(token);
  },

  clearAccessToken(): void {
    useAuthStore.getState().clearTokens();
  },

  getRefreshToken(): string | null {
    return Cookies.get('refreshToken') ?? null;
  },

  setRefreshToken(token: string): void {
    Cookies.set('refreshToken', token, {
      path: '/',
      expires: 7,
      sameSite: 'strict',
    });
  },

  clearRefreshToken(): void {
    Cookies.remove('refreshToken', { path: '/' });
  },

  clearAllTokens(): void {
    useAuthStore.getState().clearTokens();
    Cookies.remove('refreshToken', { path: '/' });
  },
};
