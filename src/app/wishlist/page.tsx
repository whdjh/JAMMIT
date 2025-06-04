import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getLiked } from '@/lib/wish/wish';
import WishPage from '@/components/products/wish/WishPage';
import { makeWishQueryKey, Page } from '@/types/wish';
import { BandSession, Genre } from '@/types/tags';

export default async function WishlistPage() {
  const queryClient = new QueryClient();
  const defaultGenres: Genre[] = [Genre.POP];
  const defaultSessions: BandSession[] = [];

  const queryKey = makeWishQueryKey({
    genres: defaultGenres,
    sessions: defaultSessions,
    includeCanceled: false,
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn: ({ queryKey, pageParam = 0 }) => getLiked({ queryKey, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: Page) => {
      return lastPage.currentPage + 1 < lastPage.totalPage
        ? lastPage.currentPage + 1
        : undefined;
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WishPage
        defaultGenres={defaultGenres}
        defaultSessions={defaultSessions}
      />
    </HydrationBoundary>
  );
}
