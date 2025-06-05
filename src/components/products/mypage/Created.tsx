'use clients';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/commons/Card';
import { CARD_STATE } from '@/constants/card';
import { RecruitCardData } from '@/types/card';
import InfinityScroll from '@/components/commons/InfinityScroll';
import { mockCard } from './mockCard';

const LOAD_SIZE = 8;

export default function Created() {
  const [load, setLoad] = useState(1);
  const [items, setItems] = useState<RecruitCardData[]>([]);

  useEffect(() => {
    const start = LOAD_SIZE * (load - 1);
    const end = LOAD_SIZE * load;
    const newItems = mockCard.slice(start, end);
    setItems((prev) => [...prev, ...newItems]);
  }, [load]);

  const handleInView = () => {
    if (items.length < mockCard.length) {
      setLoad((prev) => prev + 1);
    }
  };

  const renderCard = (item: RecruitCardData) => (
    <Link key={item.id} href={`de/${item.id}`}>
      <Card.Thumbnail
        thumbnail={item.thumbnail}
        alt={item.name}
        isLike={false}
      />
      <Card.TagList tags={item.genres} />
      <Card.TitleBlock title={item.name} author={item.author} />
      <Card.Footer
        status={CARD_STATE.COMPLETED}
        totalCurrent={item.totalCurrent}
        totalRecruit={item.totalRecruit}
        recruitDeadline={item.recruitDeadline}
        member={item.member}
      />
    </Link>
  );

  return (
    <InfinityScroll<RecruitCardData>
      list={items}
      item={renderCard}
      emptyText="참여 중인 모집이 없습니다."
      onInView={handleInView}
      hasMore={items.length < mockCard.length}
    />
  );
}
