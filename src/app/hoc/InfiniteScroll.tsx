'use client';

import { ComponentType, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchCollectionWithQuery } from '../lib/data';

type InfiniteScrollProps<T> = {
  initialData: T[];
  initialPage: number;
  initialQuery: string;
};

export function withInfiniteScroll<T>(
  WrappedComponent: ComponentType<{ data: T[] }>
) {
  return function WithInfiniteScroll({
    initialData,
    initialPage,
    initialQuery,
    ...props
  }: InfiniteScrollProps<T>) {
    const [data, setData] = useState<T[]>(initialData);
    const [page, setPage] = useState(initialPage);
    const [query] = useState(initialQuery);
    const [hasMore, setHasMore] = useState(true);
    const [ref, inView] = useInView();

    async function loadMoreData() {
      const nextPage = page + 1;
      const { results, total_pages } = await fetchCollectionWithQuery(
        query,
        nextPage
      );
      if (results.length) {
        setPage(nextPage);
        setData((prev) => [...prev, ...results]);
        setHasMore(nextPage < total_pages);
      } else {
        setHasMore(false);
      }
    }

    useEffect(() => {
      if (inView && hasMore) {
        loadMoreData();
      }
    }, [inView, hasMore]);

    return (
      <>
        <WrappedComponent data={data} {...props} />
        {hasMore && (
          <div ref={ref} className="flex justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}
      </>
    );
  };
}
