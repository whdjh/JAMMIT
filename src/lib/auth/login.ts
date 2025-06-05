import { LoginRequest, LoginResult } from '@/types/auth';
import { apiClient } from '@/utils/apiClient';

export async function postLogin({
  email,
  password,
}: LoginRequest): Promise<LoginResult> {
  return await apiClient.post<LoginResult>('/auth/login', {
    email,
    password,
  });
}
