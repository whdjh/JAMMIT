import Link from 'next/link';
import React from 'react';
import { Card } from '.';
import { RecruitCardData } from '@/types/card';
import { CARD_STATE } from '@/constants/card';

interface CardItemProps {
  item: RecruitCardData;
}

export default function CardItem({ item }: CardItemProps) {
  return (
    <Link key={item.id} href={`/group/${item.id}`}>
      <Card.Thumbnail
        thumbnail={item.thumbnail}
        alt={item.name}
        favoriteItem={{
          id: item.id,
          name: item.name,
          thumbnail: item.thumbnail,
          author: item.author,
          genres: item.genres,
          recruitDeadline: item.recruitDeadline,
          totalCurrent: item.totalCurrent,
          totalRecruit: item.totalRecruit,
          member: item.member,
        }}
      />
      <Card.TagList tags={item.genres} />
      <Card.TitleBlock title={item.name} author={item.author} />
      <Card.Footer
        status={CARD_STATE.PROGRESS}
        totalCurrent={item.totalCurrent}
        totalRecruit={item.totalRecruit}
        recruitDeadline={item.recruitDeadline}
        member={item.member}
      />
    </Link>
  );
}
