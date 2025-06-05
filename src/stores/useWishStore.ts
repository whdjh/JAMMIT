import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FavoriteItem } from '@/types/wish';

interface WishState {
  items: FavoriteItem[];
  toggle: (item: FavoriteItem) => void;
  isLiked: (id: number) => boolean;
}
export const useWishStore = create<WishState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (item) => {
        const exist = get().items.find((i) => i.id === item.id);
        const update = exist
          ? get().items.filter((i) => i.id !== item.id)
          : [...get().items, item];
        set({ items: update });
      },
      isLiked: (id) => get().items.some((i) => i.id === id),
    }),
    {
      name: 'wish',
    },
  ),
);
