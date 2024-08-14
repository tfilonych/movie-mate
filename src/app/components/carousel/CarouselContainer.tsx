import { Suspense } from 'react';
import { fetchCollection } from './../../utils/data';
import CarouselCardList from './CarouselCardList';
import { Movie } from '@/app/utils/definitions';

const CarouselContainer = async ({
  title,
  collection,
  url,
  layout,
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
      <h2 className="text-xl font-bold mb-4">{title}</h2>
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
