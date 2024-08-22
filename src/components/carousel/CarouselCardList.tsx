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

const imgSize = {
  width: 355,
  height: 200,
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
          <div className="relative w-56 bg-slate-700">
            <ImageWrapper
              src={card.backdrop_path}
              width={imgSize.width}
              height={imgSize.height}
              title={card.title}
              layout="horizontal"
            />
          </div>
          <CardInfo title={card.title} />
        </Link>
      ))}
    </>
  );
};

const CarouselCardList = withInfiniteScroll<Movie>(
  withHorizontalLayout(Carousel),
);

export default CarouselCardList;
