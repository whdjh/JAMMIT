import { http, HttpResponse } from 'msw';

export const MOCK_VIDEOS = [
  {
    id: 1,
    title: '락 밴드 연주 영상 (mock)',
    description: '재미있는 락 밴드 연주 영상입니다.',
    thumbnailUrl: '/images/card/img_card_pc_01.avif',
    videoUrl: 'https://example.com/video1.mp4',
    viewCount: 150,
    likeCount: 25,
    createdAt: '2024-12-01T10:00:00Z',
    duration: '3:45',
    nickname: '밴드리더',
  },
  {
    id: 2,
    title: '재즈 세션 영상 (mock)',
    description: '부드러운 재즈 세션 영상입니다.',
    thumbnailUrl: '/images/card/img_card_pc_02.avif',
    videoUrl: 'https://example.com/video2.mp4',
    viewCount: 89,
    likeCount: 15,
    createdAt: '2024-12-02T15:30:00Z',
    duration: '4:20',
    nickname: '재즈맨',
  },
];

export const videosHandlers = [
  http.get('http://localhost:3000/video', () => {
    return HttpResponse.json({
      data: MOCK_VIDEOS,
      totalPages: 1,
      currentPage: 0,
      totalElements: MOCK_VIDEOS.length,
      weekTopVideo: MOCK_VIDEOS[0],
    });
  }),

  http.get('*/video/:id', ({ params }) => {
    const videoId = params?.id;
    if (!videoId) {
      return new HttpResponse(null, { status: 400 });
    }
    const video = MOCK_VIDEOS.find((v) => v.id === parseInt(videoId as string));

    if (!video) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      ...video,
      description: video.description,
      likeCount: video.likeCount,
      commentCount: 5,
      isLiked: false,
    });
  }),

  http.get('*/video/like-status/:id', ({ params }) => {
    const videoId = params?.id;
    if (!videoId) {
      return new HttpResponse(null, { status: 400 });
    }
    return HttpResponse.json({ isLiked: false });
  }),

  http.post('*/video/like/:id', ({ params }) => {
    const videoId = params?.id;
    if (!videoId) {
      return new HttpResponse(null, { status: 400 });
    }
    return HttpResponse.json({ success: true });
  }),

  http.post('*/video/:id', ({ params }) => {
    const videoId = params?.id;
    if (!videoId) {
      return new HttpResponse(null, { status: 400 });
    }
    return HttpResponse.json({ success: true });
  }),

  http.get('*/video/detail/:id', ({ params }) => {
    const videoId = params?.id;
    if (!videoId) {
      return new HttpResponse(null, { status: 400 });
    }
    const video = MOCK_VIDEOS.find((v) => v.id === parseInt(videoId as string));

    if (!video) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      ...video,
      description: video.description,
      likeCount: video.likeCount,
      commentCount: 5,
      isLiked: false,
    });
  }),

  http.post('*/comment', () => {
    return HttpResponse.json({ success: true });
  }),

  http.get('*/comment/:videoId', ({ params }) => {
    const videoId = params?.videoId;
    if (!videoId) {
      return new HttpResponse(null, { status: 400 });
    }
    return HttpResponse.json({
      comments: [],
      totalPages: 0,
      currentPage: 0,
      totalElements: 0,
    });
  }),
];
