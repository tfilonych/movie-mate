'use server';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { fetchCollection } from '../lib/data';
import { VerticalInfiniteScrollMovieList } from './MovieListWithScroll';

const MovieListWithScroll = dynamic(
  () =>
    import('./MovieListWithScroll').then(
      (mod) => mod.VerticalInfiniteScrollMovieList
    ),
  {
    ssr: false,
  }
);

const MoviePage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || 'a';
  const currentPage = Number(searchParams?.page) || 1;
  const { results: initialMovies } = await fetchCollection({
    collection: 'movie',
    url: 'search/movie',
    query,
    page: currentPage,
  });

  return (
    <>
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <VerticalInfiniteScrollMovieList
          collection="movie"
          url="search/movie"
          initialData={initialMovies}
          initialPage={currentPage}
          initialQuery={query}
        />
      </Suspense>
    </>
  );
};

export default MoviePage;
