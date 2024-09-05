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

const SearchCardList = ({ data }: MovieListProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full border-spacing-2 border-2 py-1 text-center text-xl text-white">
        Search Results:
      </div>
      <div className="flex flex-col gap-4">
        {data.map((card) => (
          <Link
            href={`/movies/${card.id}`}
            key={card.id}
            className="my-2 flex w-full gap-4 overflow-hidden py-3"
          >
            <ImageWrapper
              src={card.backdrop_path}
              orientation="landscape"
              title={card.title}
              layout="horizontal"
            />
            <CardInfo title={card.title} description={card.overview} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const SearchCardListComponent = withInfiniteScroll(
  withHorizontalLayout(SearchCardList),
);

export default SearchCardListComponent;
