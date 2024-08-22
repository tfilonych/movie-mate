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

const imgSize = {
  width: 300,
  height: 250,
};

const MovieList = ({ data }: MovieListProps) => {
  return (
    <>
      {data.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <div key={movie.id} className="flex cursor-pointer flex-col">
            <div className="relative bg-slate-700">
              <ImageWrapper
                src={movie.poster_path}
                width={imgSize.width}
                height={imgSize.height}
                title={movie.title}
                layout="vertical"
              />
            </div>
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
