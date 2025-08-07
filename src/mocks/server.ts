import { setupServer } from 'msw/node';
import { gatheringsHandlers } from './handlers/gatherings';
import { videosHandlers } from './handlers/videos';
import { authHandlers } from './handlers/auth';

// MSW 서버를 설정합니다.
export const server = setupServer(
  ...gatheringsHandlers,
  ...videosHandlers,
  ...authHandlers,
);
