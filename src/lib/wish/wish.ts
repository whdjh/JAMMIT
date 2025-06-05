import { WishQueryKey, WishResponse } from '@/types/wish';

export async function getLiked({
  queryKey,
}: {
  queryKey: WishQueryKey;
  pageParam?: number;
}): Promise<WishResponse> {
  const [, { genres, sessions, includeCanceled }] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gatherings?genres=${genres}&sessions=${sessions}&includeCanceled=${includeCanceled}`,
  );

  if (!res.ok) throw new Error('찜한 목록 불러오기 실패');
  return res.json();
}
