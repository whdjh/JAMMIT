import instance from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const useUserMeQuery = () =>
  useQuery({
    queryKey: ['me'], // Query Key Factory 사용 고민 필요
    queryFn: async () => {
      const response = await instance.get('/user');
      const data = response.data;

      if ('success' in data && !data.success) {
        throw new Error(data.message || '유저 정보 조회 실패');
      }

      return data;
    },
    retry: true,
  });
