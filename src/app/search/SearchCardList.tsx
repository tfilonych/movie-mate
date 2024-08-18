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

const SearchCardList = ({ data }: MovieListProps) => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full border-spacing-2 border-2 py-1 text-center text-xl text-white">
        Search Results:
      </div>
      <div className="flex flex-col gap-4">
        {data.map((card) => (
          <div key={card.id} className="my-2 flex gap-4 overflow-hidden py-3">
            <div className="relative flex-shrink-0 bg-slate-700">
              <ImageWrapper
                src={card.backdrop_path}
                width={imgSize.width}
                height={imgSize.height}
                title={card.title}
                layout="horizontal"
              />
            </div>
            <CardInfo title={card.title} description={card.overview} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchCardListComponent = withInfiniteScroll(
  withHorizontalLayout(SearchCardList),
);

export default SearchCardListComponent;
