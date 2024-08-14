'use client';

import { Movie } from '../utils/definitions';
import ImageWrapper from '../components/ImageWrapper';
import { withInfiniteScroll } from '../hoc/InfiniteScroll';
import withVerticalLayout from '../hoc/withVerticalLayout';

type MovieListProps = {
  data: Movie[];
  itemClassName?: string;
};

const MovieList = ({ data, itemClassName = '' }: MovieListProps) => {
  return (
    <>
      {data.map((movie) => (
        <div
          key={movie.id}
          className={`flex flex-col justify-center align-middle gap-4 cursor-pointer ${itemClassName}`}
        >
          <div className="bg-slate-700">
            <ImageWrapper
              src={movie.poster_path}
              width={500}
              height={750}
              title={movie.title}
              layout="vertical"
            />
          </div>
          <div className="p-2 flex-1 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-2 text-ellipsis overflow-hidden line-clamp-1">
              {movie.title}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

const MovieListContainer = withInfiniteScroll<Movie>(withVerticalLayout(MovieList));

export default MovieListContainer;
