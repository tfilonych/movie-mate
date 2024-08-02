import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Search from '../components/search/Search';
import { fetchMoviesWithQuery } from '../lib/data';

const MovieListWithScroll = dynamic(() => import('./MovieListWithScroll'), {
  ssr: false,
});

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
  const { results: initialMovies } = await fetchMoviesWithQuery(
    query,
    currentPage
  );

  return (
    <>
      <Search placeholder={'Search...'} />
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <MovieListWithScroll
          initialData={initialMovies}
          initialPage={currentPage}
          initialQuery={query}
        />
      </Suspense>
    </>
  );
};

export default MoviePage;
