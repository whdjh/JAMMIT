import { putUpdateProfile } from '@/lib/mypage/updateprofile';
import { handleAuthApiError } from '@/utils/authApiError';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProfile = () =>
  useMutation({
    mutationFn: putUpdateProfile,

    onSuccess: () => {
      alert('프로필 수정 완료되었습니다.');
    },

    onError: (error) =>
      handleAuthApiError(error, '프로필 수정에 실패했습니다.'),
  });
