export interface Member {
  id: string;
  nickname: string;
  sessions: string[];
  introduction: string;
  profileImage?: File | null;
}
