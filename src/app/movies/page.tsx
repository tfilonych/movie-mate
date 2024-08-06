'use server';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Search from '../components/search/Search';
import { fetchCollectionWithQuery } from '../lib/data';
import { VerticalInfiniteScrollMovieList } from './MovieListWithScroll';

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
  const { results: initialMovies } = await fetchCollectionWithQuery(
    query,
    currentPage
  );

  return (
    <>
      <Search placeholder={'Search...'} />
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <VerticalInfiniteScrollMovieList
          initialData={initialMovies}
          initialPage={currentPage}
          initialQuery={query}
        />
      </Suspense>
    </>
  );
};

export default MoviePage;
