import { setupWorker } from 'msw/browser';
import { gatheringsHandlers } from '@/mocks/handlers/gatherings';
import { videosHandlers } from '@/mocks/handlers/videos';
import { authHandlers } from '@/mocks/handlers/auth';

// 브라우저에서 MSW 실행
export const worker = setupWorker(
  ...gatheringsHandlers,
  ...videosHandlers,
  ...authHandlers,
);
