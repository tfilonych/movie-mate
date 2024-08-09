'use client';

import { Movie } from '../lib/definitions';
import { withInfiniteScroll } from '../hoc/InfiniteScroll';
import withHorizontalLayout from '../hoc/withHorizontalLayout';
import ImageWrapper from '../components/ImageWrapper';
import CardInfo from '../components/CardInfo';

type MovieListProps = {
  data: Movie[];
};

const SearchCardList = ({ data }: MovieListProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-xl border-spacing-2 border-2 py-1 w-full text-center text-white">
        Search Results:
      </div>
      <div className="flex flex-col gap-4">
        {data.map((card) => (
          <div key={card.id} className="flex gap-4 overflow-hidden my-2 py-3">
            <ImageWrapper
              src={card.backdrop_path}
              width={355}
              height={200}
              title={card.title}
            />
            <CardInfo title={card.title} description={card.overview} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchCardListComponent = withInfiniteScroll(
  withHorizontalLayout(SearchCardList)
);

export default SearchCardListComponent;
