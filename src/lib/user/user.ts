import { apiClient } from '@/utils/apiClient';
import { UserResponse } from '@/types/user';

export const getUserMe = async (): Promise<UserResponse> => {
  const result = await apiClient.get<UserResponse>('/user');
  return result;
};
