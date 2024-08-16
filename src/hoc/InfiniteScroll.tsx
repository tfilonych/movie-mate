'use client';

import Loader from '@/components/Loader';
import useInfiniteScrollLogic from '@/hooks/useInfiniteScrollLogic';
import { InfiniteScrollProps } from '@/libs/definitions';
import { ComponentType } from 'react';

export function withInfiniteScroll<T>(
  WrappedComponent: ComponentType<{ data: T[] }>
) {
  return function WithInfiniteScroll(props: InfiniteScrollProps<T>) {
    const { ref, allData, isFetchingNextPage, isLoading, isError } =
      useInfiniteScrollLogic(props);

    return (
      <>
        <WrappedComponent data={allData} />
        <div ref={ref} className="flex justify-center p-4">
          {(isFetchingNextPage || isLoading) && <Loader />}
        </div>
        {isError && <div>Error loading data...</div>}
      </>
    );
  };
}
