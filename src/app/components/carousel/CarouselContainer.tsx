import { Suspense } from 'react';
import { fetchCollection } from './../../lib/data';
import CarouselCardList from './CarouselCardList';

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
  const { results: initialData } = await fetchCollection({
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
        />
      </Suspense>
    </>
  );
};

export default CarouselContainer;
