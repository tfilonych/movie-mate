import { Suspense } from 'react';
import { fetchCollection } from '@/libs/data';
import SearchCardListComponent from './SearchCardList';
import { Movie } from '@/libs/definitions';
import Loader from '@/components/Loader';

const url = 'search/movie';
const collection = 'movie';

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
    collection,
    url,
    query,
    page: currentPage,
  });

  return (
    <>
      <Suspense key={query + currentPage} fallback={<Loader />}>
        <SearchCardListComponent
          collection={collection}
          url={url}
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
