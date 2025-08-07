import { setupServer } from 'msw/node';
import { gatheringsHandlers } from './handlers/gatherings';
import { authHandlers } from './handlers/auth';
import { userHandlers } from './handlers/user';

// MSW 서버를 설정합니다.
export const server = setupServer(
  ...gatheringsHandlers,
  ...authHandlers,
  ...userHandlers,
);
