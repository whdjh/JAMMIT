import { http, HttpResponse } from 'msw';

export const MOCK_USER_PROFILE = {
  id: 1,
  username: 'testuser',
  email: 'test@example.com',
  nickname: '테스트유저',
  profileImagePath: '/images/ic_default_profile.svg',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
  preferredGenres: [],
  preferredBandSessions: [],
  totalCreatedGatheringCount: 0,
  completedGatheringCount: 0,
};

export const userHandlers = [
  // 내 정보 조회
  http.get('*/user', () => {
    return HttpResponse.json(MOCK_USER_PROFILE);
  }),

  // 프로필 수정
  http.put('*/user', async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;

    return HttpResponse.json({
      success: true,
      result: {
        ...MOCK_USER_PROFILE,
        ...body,
        updatedAt: new Date().toISOString(),
      },
    });
  }),

  // 프로필 이미지 수정
  http.put('*/user/image', async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;

    return HttpResponse.json({
      success: true,
      result: {
        ...MOCK_USER_PROFILE,
        profileImagePath: body.profileImagePath as string,
        updatedAt: new Date().toISOString(),
      },
    });
  }),

  // 프로필 이미지 업로드
  http.post('*/user/:userId/profile-image', async () => {
    return HttpResponse.json({
      success: true,
      result: {
        profileImagePath: '/images/uploaded-profile.jpg',
      },
    });
  }),
];
