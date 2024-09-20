'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCollection } from '@/libs/data';
import { InfiniteScrollProps } from '@/libs/definitions';

const useInfiniteScrollLogic = <T,>({
  //   queryKey,
  collection,
  url,
  initialData,
  initialPage,
  totalPages,
  initialQuery,
}: Omit<InfiniteScrollProps<T>, 'WrappedComponent'>) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    root: null,
    rootMargin: '0px -50px 0px 0px',
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['movies', collection, url],
    queryFn: async ({ pageParam = initialPage }) =>
      await fetchCollection<T>({
        collection,
        url,
        page: pageParam,
        query: initialQuery,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialData: {
      pages: [
        {
          results: initialData,
          total_pages: totalPages,
          total_results: totalPages,
          page: initialPage,
        },
      ],
      pageParams: [initialPage],
    },
    staleTime: 5 * 60 * 1000,
  });

  const allData = data?.pages.flatMap((page) => page.results) || initialData;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return {
    ref,
    allData,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};

export default useInfiniteScrollLogic;
