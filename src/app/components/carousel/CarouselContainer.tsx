import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { fetchCollection } from './../../lib/data';
import { HorizontalInfiniteScrollCarousel } from './CarouselWithScroll';

const CarouselWithScroll = dynamic(
  () =>
    import('./CarouselWithScroll').then(
      (mod) => mod.HorizontalInfiniteScrollCarousel
    ),
  {
    ssr: false,
  }
);

const CarouselContainer = async ({
  title,
  collection,
  url,
}: {
  title: string;
  collection: string;
  url: string;
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
        <HorizontalInfiniteScrollCarousel
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
