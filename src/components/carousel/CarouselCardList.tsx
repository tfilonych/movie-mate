'use client';

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
        <div key={card.id} className="cursor-pointer w-full">
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
        </div>
      ))}
    </>
  );
};

const CarouselCardList = withInfiniteScroll<Movie>(
  withHorizontalLayout(Carousel)
);

export default CarouselCardList;
