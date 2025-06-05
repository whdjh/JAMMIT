import { handleAuthApiError } from '@/utils/authApiError';
import { signup } from '@/utils/authService';
import { useMutation } from '@tanstack/react-query';

export const useSignupMutation = () =>
  useMutation({
    mutationFn: signup,

    onSuccess: () => {
      alert('회원가입이 완료되었습니다!');
    },

    onError: (error) => handleAuthApiError(error, '회원가입에 실패했습니다.'),
  });
