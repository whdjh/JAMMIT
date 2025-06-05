'use client';
import { useQuery } from '@tanstack/react-query';
import { Radar } from 'react-chartjs-2';
import Link from 'next/link';
import dayjs from 'dayjs';
import ReviewsReceivedSkeleton from './SkeletonRadar';
import SkeletonReviewList from './SkeletonReviewList';
import { getReview, getStatus } from '@/lib/review/received';
import { REVIEW_METRICS } from '@/constants/review';
import DefaultProfileImage from '@/assets/icons/ic_default_profile.svg';
import { ReviewPros } from '@/types/review';
import '@/utils/chartConfig';

export default function ReviewsReceived() {
  const {
    data: radar,
    isLoading: isLoadingRadar,
    isError: isErrorRadar,
  } = useQuery({
    queryKey: ['reviewRadar'],
    queryFn: getStatus,
  });
  const {
    data: review,
    isLoading: isLoadingReview,
    isError: isErrorReview,
  } = useQuery({
    queryKey: ['getReview'],
    queryFn: getReview,
  });
  const isLoading = isLoadingReview || isLoadingRadar;
  const isError = isErrorReview || isErrorRadar;
  const isEmpty = !review || !radar;

  if (isLoading)
    return (
      <div className="mt-5 flex items-start gap-5">
        <ReviewsReceivedSkeleton />
        <SkeletonReviewList />
      </div>
    );
  if (isError || isEmpty) return <div>오류가 발생했어요 😥</div>;

  return (
    <div className="mt-5 flex items-start gap-5">
      <div className="w-[23rem] rounded-lg bg-[#28282a] px-[2.375rem] pt-[3.75rem] pb-[2.375rem]">
        <div className="mx-auto h-[18.5rem] w-[18.5rem]">
          <Radar
            data={{
              labels: REVIEW_METRICS.map((item) => item.label),
              datasets: [
                {
                  label: '리뷰',
                  data: REVIEW_METRICS.map(
                    (data) =>
                      radar[data.percentageKey as keyof typeof radar] ?? 0,
                  ),
                  backgroundColor: 'rgba(151, 71, 255, 0.3)',
                  borderColor: 'rgba(151, 71, 255, 1)',
                  borderWidth: 2,
                  pointBackgroundColor: '#fff',
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                r: {
                  beginAtZero: true,
                  max: 100,
                  ticks: { display: false },
                  grid: { color: '#444' },
                  angleLines: { color: '#444' },
                  pointLabels: {
                    color: '#fff',
                    font: { size: 10 },
                  },
                },
              },
              plugins: {
                legend: { display: false },
              },
            }}
          />
        </div>
        <ul className="mt-[53px] flex w-full flex-col gap-4">
          {REVIEW_METRICS.map((review) => (
            <li
              key={review.name}
              className="flex h-10 items-center justify-between rounded-lg bg-[linear-gradient(to_right,#9747FF20_54%,#00000020_100%)] px-4"
            >
              {review.name}
              <span>{radar[review.countKey as keyof typeof radar] ?? 0}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-auto flex-col gap-5">
        {review.length > 0 ? (
          review.map((item: ReviewPros) => (
            <li
              className="rounded-lg bg-[#28282a] px-[3.75rem] py-[3.75rem]"
              key={item.id}
            >
              <div className="mb-6 flex items-center gap-3">
                <DefaultProfileImage width={56} height={56} />
                <p>{item.reviewerNickname}</p>
                <span>보컬</span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {REVIEW_METRICS.filter(
                  (m) => item[m.key as keyof ReviewPros],
                ).map((m) => (
                  <li
                    key={m.key}
                    className="rounded-lg bg-[var(--bg-34343A)] px-3 py-1.5"
                  >
                    {m.name}
                  </li>
                ))}
              </ul>
              <p className="my-6">{item.content}</p>
              <p className="mb-[35px] opacity-60">
                {dayjs(item.createdAt).format('YYYY.MM.DD')}
              </p>
              <Link
                href={`/group/${item.gatheringId}`}
                className="block w-full rounded-lg border border-[#464141] px-[27px] py-[22px]"
              >
                <p className="leading-6">{item.gatheringName}</p>
                <p className="mt-1 leading-6 opacity-60">데이터 바꿀꺼</p>
              </Link>
            </li>
          ))
        ) : (
          <div className="rounded-lg bg-[#28282a] px-[3.75rem] py-[3.75rem] text-center">
            아직 리뷰가 없습니다.
          </div>
        )}
      </ul>
    </div>
  );
}
