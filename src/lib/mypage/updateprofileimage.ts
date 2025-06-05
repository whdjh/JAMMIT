import { UpdateProfileImageRequest, UpdateProfileResponse } from '@/types/user';
import { getAccessToken } from '@/utils/token';

export async function putUpdateProfileImage({
  orgFileName,
  profileImagePath,
}: UpdateProfileImageRequest): Promise<UpdateProfileResponse> {
  const token = getAccessToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/image`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      orgFileName,
      profileImagePath,
    }),
  });

  const data = await res.json();
  console.log(data);

  if (!res.ok || !data.success) {
    throw new Error(data.message || '프로필 정보 수정에 실패했습니다');
  }

  return data.result;
}
