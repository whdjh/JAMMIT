import { getUserMe } from '@/lib/user/user';
import { useQuery } from '@tanstack/react-query';

export const useUserMeQuery = () =>
  useQuery({
    queryKey: ['me'],
    queryFn: getUserMe,
    retry: true,
  });
