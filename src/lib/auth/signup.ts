import { SignupRequest, SignupResponse } from '@/types/auth';

export const postSignup = async (
  data: SignupRequest,
): Promise<SignupResponse['result']> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jammit/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    body: JSON.stringify(data),
  });

  const json: SignupResponse = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.message || '회원가입에 실패했습니다');
  }

  return json.result;
};
