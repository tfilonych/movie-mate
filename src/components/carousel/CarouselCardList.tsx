'use client';

import Link from 'next/link';
import { Movie } from '@/libs/definitions';
import { withInfiniteScroll } from '@/hoc/InfiniteScroll';
import withHorizontalLayout from '@/hoc/withHorizontalLayout';
import ImageWrapper from '@/components/ImageWrapper';
import CardInfo from '@/components/CardInfo';

type MovieListProps = {
  data: Movie[];
};

const Carousel = ({ data }: MovieListProps) => {
  return (
    <>
      {data.map((card) => (
        <Link
          href={`/movies/${card.id}`}
          key={card.id}
          className="w-full cursor-pointer"
        >
          <ImageWrapper
            src={card.backdrop_path}
            orientation="landscape"
            title={card.title}
            layout="horizontal"
          />
          <CardInfo title={card.title} />
        </Link>
      ))}
    </>
  );
};
const CarouselCardList = withHorizontalLayout(
  withInfiniteScroll<Movie>(Carousel),
);

export default CarouselCardList;
