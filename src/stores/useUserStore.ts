import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserResponse } from '@/types/user';

interface UserState {
  user: UserResponse | null;
  isLoggedIn: boolean;
  setUser: (user: UserResponse) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      setUser: (user) => set({ user, isLoggedIn: true }),
      clearUser: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'user',
    },
  ),
);
