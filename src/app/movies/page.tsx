'use server';
import { Suspense } from 'react';
import { fetchCollection } from '../utils/data';
import MovieListContainer from './MovieList';
import { Movie } from '../utils/definitions';

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

  const { results: initialMovies, total_pages } = await fetchCollection<Movie>({
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
          totalPages={total_pages}
        />
      </Suspense>
    </>
  );
};

export default MoviePage;
