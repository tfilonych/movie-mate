'use server';
import { Suspense } from 'react';
import { fetchCollection } from '../lib/data';
import MovieListContainer from './MovieList';

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
        <MovieListContainer
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
