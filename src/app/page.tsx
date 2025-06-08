import RecruitPage from '@/components/products/recruit/RecruitPage';
import { BandSession, Genre } from '@/types/tags';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default function Home() {
  const queryClient = new QueryClient();
  const defaultGenres: Genre[] = [Genre.POP];
  const defaultSessions: BandSession[] = [];
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecruitPage
        defaultGenres={defaultGenres}
        defaultSessions={defaultSessions}
      />
    </HydrationBoundary>
  );
}
