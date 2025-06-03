import { postLogin } from '@/lib/auth/login';
import { handleAuthApiError } from '@/utils/authApiError';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: postLogin,

    onSuccess: () => {
      alert('로그인이 완료되었습니다!');
    },

    onError: (error) => handleAuthApiError(error, '로그인에 실패했습니다.'),
  });
