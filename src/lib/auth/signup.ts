import { SignupRequest, SignupResponse } from '@/types/auth';

export const postSignup = async (
  data: SignupRequest,
): Promise<SignupResponse['result']> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
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

export const checkEmailDuplicate = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/exists?email=${encodeURIComponent(email)}`,
    { method: 'GET' },
  );
  if (!res.ok) {
    throw new Error('이메일 중복 확인에 실패했습니다');
  }
  const data = await res.json();
  return data.result.exists as boolean;
};
