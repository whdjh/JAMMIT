import { LoginRequest, LoginResponse } from '@/types/auth';

export async function postLogin({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jammit/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    },
  );

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message || '로그인에 실패했습니다');
  }

  return data.result;
}
