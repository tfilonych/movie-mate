'use client';

import Link from 'next/link';
import { Movie } from '@/libs/definitions';
import ImageWrapper from '@/components/ImageWrapper';
import { withInfiniteScroll } from '@/hoc/InfiniteScroll';
import withVerticalLayout from '@/hoc/withVerticalLayout';
import CardInfo from '@/components/CardInfo';

type MovieListProps = {
  data: Movie[];
};

const MovieList = ({ data }: MovieListProps) => {
  return (
    <>
      {data.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <div
            key={movie.id}
            className="flex w-[185px] cursor-pointer flex-col overflow-hidden"
          >
            <ImageWrapper
              src={movie.poster_path}
              orientation="portrait_sm"
              title={movie.title}
              layout="vertical"
            />
            <CardInfo title={movie.title} />
          </div>
        </Link>
      ))}
    </>
  );
};

const MovieListContainer = withInfiniteScroll<Movie>(
  withVerticalLayout(MovieList),
);

export default MovieListContainer;
