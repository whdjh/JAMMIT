import { useAuthStore } from '@/stores/useAuthStore';
import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const getStatus = async () => {
  return await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_URL}/review/received/statistics`,
    () => useAuthStore.getState().accessToken,
    {
      method: 'GET',
    },
  );
};

export const getReview = async () => {
  return await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_URL}/review/received`,
    () => useAuthStore.getState().accessToken,
    {
      method: 'GET',
    },
  );
};
