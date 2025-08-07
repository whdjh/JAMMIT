import { setupWorker } from 'msw/browser';
import { gatheringsHandlers } from '@/mocks/handlers/gatherings';
import { authHandlers } from '@/mocks/handlers/auth';
import { userHandlers } from '@/mocks/handlers/user';

// 브라우저에서 MSW 실행
export const worker = setupWorker(
  ...gatheringsHandlers,
  ...authHandlers,
  ...userHandlers,
);
