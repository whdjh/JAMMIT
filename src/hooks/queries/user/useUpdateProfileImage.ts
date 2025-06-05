import { putUpdateProfileImage } from '@/lib/mypage/updateprofileimage';
import { handleAuthApiError } from '@/utils/authApiError';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProfileImage = () =>
  useMutation({
    mutationFn: putUpdateProfileImage,

    onSuccess: () => {
      alert('프로필 이미지 수정 완료되었습니다.');
    },

    onError: (error) =>
      handleAuthApiError(error, '프로필 이미지 수정에 실패했습니다.'),
  });
