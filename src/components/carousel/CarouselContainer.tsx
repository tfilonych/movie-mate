import { Suspense } from 'react';
import { fetchCollection } from '@/libs/data';
import CarouselCardList from './CarouselCardList';
import { Movie } from '@/libs/definitions';

const CarouselContainer = async ({
  title,
  collection,
  url,
}: {
  title: string;
  collection: string;
  url: string;
  layout: string;
}) => {
  const currentPage = 1;
  const { results: initialData, total_pages } = await fetchCollection<Movie>({
    collection,
    url,
    page: currentPage,
  });

  return (
    <>
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <Suspense key={currentPage} fallback={<div>Loading...</div>}>
        <CarouselCardList
          collection={collection}
          url={url}
          initialData={initialData}
          initialPage={currentPage}
          totalPages={total_pages}
        />
      </Suspense>
    </>
  );
};

export default CarouselContainer;
