import { useEffect } from 'react';

/**
 * useClickOutside hook은 브라우저 환경(클라이언트 사이드)에서만 동작
 * SSR 환경에서는 document가 없기 때문에 사용 시 주의하세요.
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  onClickOutside: () => void,
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, onClickOutside]);
}
