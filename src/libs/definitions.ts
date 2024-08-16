import { InfiniteQueryObserverOptions } from '@tanstack/react-query';

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ApiResponse<T> = {
  results: T[];
  total_pages: number;
  total_results: number;
  page: number;
};

export type ApiRequestParams = {
  collection: string;
  url: string;
  page: number;
  query?: string;
  path?: string;
};

export type InfiniteScrollProps<T> = {
  collection: string;
  url: string;
  initialData: T[];
  initialPage: number;
  totalPages: number;
  initialQuery?: string;
  queryKey: string[];
  // queryFnOptions?: Omit<
  //   InfiniteQueryObserverOptions<ApiResponse<T>, unknown, T[], T[], string[]>,
  //   'queryKey' | 'queryFn' | 'getNextPageParam' | 'initialData'
  // >;
};
