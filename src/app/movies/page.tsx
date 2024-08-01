import { Suspense } from 'react';
import MovieList from './MovieList';
import Search from '../components/search/Search';

const MoviePage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || 'latest';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Search placeholder={'Search movie...'} />
      <Suspense key={query + currentPage} fallback="Loading...">
        <MovieList query={query} currentPage={currentPage} />
      </Suspense>
      ;
    </>
  );
};

export default MoviePage;
