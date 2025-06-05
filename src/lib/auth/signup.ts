import { SignupRequest } from '@/types/auth';
import { UserResponse } from '@/types/user';
import { apiClient } from '@/utils/apiClient';

export const postSignup = async (
  data: SignupRequest,
): Promise<UserResponse> => {
  return await apiClient.post<UserResponse>('/user', data);
};

export const checkEmailDuplicate = async (email: string): Promise<boolean> => {
  const result = await apiClient.get<{ exists: boolean }>(
    `/user/exists?email=${encodeURIComponent(email)}`,
  );
  return result.exists;
};
