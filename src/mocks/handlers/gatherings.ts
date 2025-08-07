import { http, HttpResponse } from 'msw';
import { RecruitResponse } from '@/types/recruit';
import { GatheringCard } from '@/types/card';

export const MOCK_GATHERINGS: GatheringCard[] = [
  {
    id: 1,
    name: '락 밴드 모집합니다 (mock)',
    place: '서울 강남구',
    thumbnail: '/images/card/img_card_pc_01.avif',
    gatheringDateTime: '2024-12-25T19:00:00',
    totalRecruit: 5,
    totalCurrent: 3,
    viewCount: 150,
    recruitDeadline: '2024-12-20T23:59:59',
    status: 'RECRUITING',
    genres: ['ROCK', 'METAL'],
    creator: {
      id: 1,
      nickname: '밴드리더',
    },
    sessions: [
      {
        bandSession: 'VOCAL',
        recruitCount: 1,
        currentCount: 1,
      },
      {
        bandSession: 'ELECTRIC_GUITAR',
        recruitCount: 1,
        currentCount: 0,
      },
      {
        bandSession: 'DRUM',
        recruitCount: 1,
        currentCount: 1,
      },
      {
        bandSession: 'BASS',
        recruitCount: 1,
        currentCount: 1,
      },
      {
        bandSession: 'KEYBOARD',
        recruitCount: 1,
        currentCount: 0,
      },
    ],
  },
  {
    id: 2,
    name: '재즈 세션 모집 (mock)',
    place: '서울 홍대',
    thumbnail: '/images/card/img_card_pc_02.avif',
    gatheringDateTime: '2024-12-30T20:00:00',
    totalRecruit: 4,
    totalCurrent: 2,
    viewCount: 89,
    recruitDeadline: '2024-12-25T23:59:59',
    status: 'RECRUITING',
    genres: ['JAZZ', 'ACOUSTIC'],
    creator: {
      id: 2,
      nickname: '재즈맨',
    },
    sessions: [
      {
        bandSession: 'VOCAL',
        recruitCount: 1,
        currentCount: 1,
      },
      {
        bandSession: 'ACOUSTIC_GUITAR',
        recruitCount: 1,
        currentCount: 0,
      },
      {
        bandSession: 'DRUM',
        recruitCount: 1,
        currentCount: 1,
      },
      {
        bandSession: 'BASS',
        recruitCount: 1,
        currentCount: 0,
      },
    ],
  },
];

export const gatheringsHandlers = [
  http.get('http://localhost:3000/gatherings', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');
    const size = parseInt(url.searchParams.get('size') || '8');
    const sort = url.searchParams.get('sort') || 'recruitDeadline,asc';
    const genres = url.searchParams.getAll('genres');
    const sessions = url.searchParams.getAll('sessions');

    // 필터링 로직 (실제로는 더 복잡할 수 있음)
    let filteredGatherings = MOCK_GATHERINGS;

    if (genres.length > 0) {
      filteredGatherings = filteredGatherings.filter((gathering) =>
        gathering.genres.some((genre) => genres.includes(genre)),
      );
    }

    if (sessions.length > 0) {
      filteredGatherings = filteredGatherings.filter((gathering) =>
        gathering.sessions.some((session) =>
          sessions.includes(session.bandSession),
        ),
      );
    }

    // 정렬 로직
    if (sort === 'recruitDeadline,asc') {
      filteredGatherings.sort(
        (a, b) =>
          new Date(a.recruitDeadline).getTime() -
          new Date(b.recruitDeadline).getTime(),
      );
    } else if (sort === 'recruitDeadline,desc') {
      filteredGatherings.sort(
        (a, b) =>
          new Date(b.recruitDeadline).getTime() -
          new Date(a.recruitDeadline).getTime(),
      );
    }

    // 페이지네이션
    const totalElements = filteredGatherings.length;
    const totalPage = Math.ceil(totalElements / size);
    const startIndex = page * size;
    const endIndex = startIndex + size;
    const paginatedGatherings = filteredGatherings.slice(startIndex, endIndex);

    const response: RecruitResponse = {
      gatherings: paginatedGatherings,
      currentPage: page,
      totalPage,
      totalElements,
    };

    return HttpResponse.json(response);
  }),
];
