import { getUserMe } from '@/lib/user/user';
import { useUserStore } from '@/stores/useUserStore';
import { UserResponse } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useUserMeQuery = () => {
  const setUser = useUserStore((state) => state.setUser);

  const query = useQuery<UserResponse>({
    queryKey: ['me'],
    queryFn: getUserMe,
    retry: true,
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data);
    }
  }, [query.data, setUser]);

  return query;
};
