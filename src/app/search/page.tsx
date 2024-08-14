import { Suspense } from 'react';
import { fetchCollection } from '../utils/data';
import SearchCardListComponent from './SearchCardList';
import { Movie } from '../utils/definitions';

const SearchReasultPage = async ({
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
        <SearchCardListComponent
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

export default SearchReasultPage;
