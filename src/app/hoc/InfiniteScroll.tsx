'use client';

import { ComponentType, useEffect } from 'react';
import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { fetchCollection } from '../utils/data';

type InfiniteScrollProps<T> = {
  collection: string;
  url: string;
  initialData: T[];
  initialPage: number;
  totalPages: number;
  initialQuery?: string;
};

type ApiResponse<T> = {
  results: T[];
  total_pages: number;
  total_results: number;
  page: number;
};

export function withInfiniteScroll<T>(
  WrappedComponent: ComponentType<{ data: T[] }>
) {
  return function WithInfiniteScroll({
    collection,
    url,
    initialData,
    initialPage,
    totalPages,
    initialQuery,
  }: InfiniteScrollProps<T>) {
    const [ref, inView] = useInView();

    const {
      data,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isLoading,
      isError,
    } = useInfiniteQuery({
      queryKey: ['movies', collection, url, initialQuery],
      queryFn: async ({
        pageParam = initialPage,
      }) => {
        const response = await fetchCollection<T>({
          collection,
          url,
          page: pageParam,
          query: initialQuery,
        });
        return response;
      },
      initialPageParam: 0, 
      getNextPageParam: (lastPage) => {
        console.log(lastPage)
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
            total_results: initialData.length,
            page: initialPage,
          },
        ],
        pageParams: [initialPage],
      },
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      placeholderData: keepPreviousData
    });

    const allData = data?.pages.flatMap((page) => page.results) || initialData;

    useEffect(() => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage, hasNextPage]);

    return (
      <>
        <WrappedComponent data={allData} />
        <div ref={ref} className="flex justify-center p-4">
          {(isFetchingNextPage || isLoading) && (
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-red-500 border-t-transparent"></div>
          )}
        </div>
        {isError && <div>Error loading data...</div>}
      </>
    );
  };
}
