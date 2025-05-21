import { useEffect, useState } from 'react';

// TODO: API 완성 후 삭제
const mockData: DropdownMenuProps[] = [
  { id: 1, title: 'A', review: 4.5, participants: 12, createdAt: '2024-05-14' },
  { id: 2, title: 'B', review: 4.8, participants: 8, createdAt: '2024-05-12' },
  { id: 3, title: 'C', review: 4.0, participants: 20, createdAt: '2024-05-10' },
];

// TODO: API 데이터 확인 변경 필요
export interface DropdownMenuProps {
  id: number;
  title: string;
  review: number;
  participants: number;
  createdAt: string;
}

export default function useSortedData(sortOption: string) {
  const [sortedData, setSortedData] = useState<DropdownMenuProps[]>([]);

  // TODO: API 작업 완료 후 데이터 가져오고, responde data 수정
  useEffect(() => {
    let sorted: DropdownMenuProps[];

    switch (sortOption) {
      case '최신 순':
        sorted = [...mockData].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case '리뷰 높은 순':
        sorted = [...mockData].sort((a, b) => b.review - a.review);
        break;
      case '참여 인원 순':
        sorted = [...mockData].sort((a, b) => b.participants - a.participants);
        break;
      default:
        sorted = [...mockData];
    }

    setSortedData(sorted);
  }, [sortOption]);

  return sortedData;
}
