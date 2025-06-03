import { useAuthStore } from '@/stores/useAuthStore';
import Cookies from 'js-cookie';

export const getAccessToken = (): string | null => {
  return useAuthStore.getState().accessToken;
};

export const setAccessToken = (token: string) => {
  useAuthStore.getState().setTokens(token);
};

export const clearAccessToken = () => {
  useAuthStore.getState().clearTokens();
};

export const getRefreshTokenFromCookie = (): string | null => {
  return Cookies.get('refreshToken') ?? null;
};

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set('refreshToken', token, {
    path: '/',
    expires: 7,
    sameSite: 'strict',
  });
};

export const removeRefreshTokenFromCookie = () => {
  Cookies.remove('refreshToken', { path: '/' });
};
