'use client';

import Image from 'next/image';
import GroupInfoSection from './GroupInfoSection';
import bannerImages from '@/constants/bannerImages';
import GroupPageLayout from '@/components/commons/GroupPageLayout';
import { useQueryTab } from '@/hooks/useQueryTab';
import MemberInfoSection from './MemberInfoSection';

export default function GroupPage() {
  const { activeTab } = useQueryTab<'recruit' | 'members'>('tab', 'recruit', [
    'recruit',
    'members',
  ]);

  const groupData = {
    bannerImageIndex: 0,
    title: 'KPOP 위주로 합주해보실 세션 모집',
    hostName: '현호박',
    location: '홍대입구역',
    meetingDate: '2025년 5월 31일 토요일 PM 2시',
    closingDate: '2025년 5월 31일 토요일 PM 2시',
    sessions: [
      { name: '보컬', current: 9, max: 9 },
      { name: '일렉 기타', current: 9, max: 9 },
      { name: '통기타', current: 9, max: 9 },
      { name: '베이스', current: 9, max: 9 },
      { name: '드럼', current: 9, max: 9 },
      { name: '건반', current: 9, max: 9 },
      { name: '현악기', current: 9, max: 9 },
      { name: '타악기', current: 9, max: 9 },
    ],
    genres: ['락', '메탈', '팝', '발라드', 'R&B', '포크'],
    description: `안녕하세요! 퇴근하고 간단하게 합주 좀 하고
뒷풀이 맥주 한 잔 후 헤어지는 잼을 계획 중에 있습니다~

일단, 홍대입구역 8출 근처 연습실 xxx에서 만나구요.
뒷풀이는 근처 치킨집 ○○로 예약해두려고 합니다.
모임 확정되면 단톡 팠테니 많은 참여 부탁드려요~`,
  };

  return (
    <GroupPageLayout
      banner={
        <div className="relative h-[22rem] w-full overflow-hidden rounded-[0.5rem]">
          <Image
            src={bannerImages[groupData.bannerImageIndex]}
            alt="모임 배너"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      }
    >
      {activeTab === 'recruit' ? (
        <GroupInfoSection
          title={groupData.title}
          hostName={groupData.hostName}
          location={groupData.location}
          meetingDate={groupData.meetingDate}
          closingDate={groupData.closingDate}
          sessions={groupData.sessions}
          genres={groupData.genres}
          description={groupData.description}
        />
      ) : (
        <MemberInfoSection />
      )}
    </GroupPageLayout>
  );
}
