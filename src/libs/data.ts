'use server';

import { ApiResponse, ApiRequestParams } from './definitions';

const API = process.env.TMDB_API;
const API_KEY = process.env.TMDB_API_KEY;

export const fetchCollection = async <T>({
  url,
  page,
  query,
}: ApiRequestParams): Promise<ApiResponse<T>> => {
  // prepare API params
  const searchQuery = query ? `&query=${encodeURIComponent(query)}` : '';
  const currentPage = page ? `&page=${page}` : '';
  const params = `?api_key=${API_KEY}${searchQuery}${currentPage}`;

  // prepare URL with params
  const fullPath = `${API}/${url}${params}`;

  const response = await fetch(fullPath);
  const data: ApiResponse<T> = await response.json();

  return data;
};
