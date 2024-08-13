'use server';

import { Movie, ApiResponse, ApiRequestParams } from '../lib/definitions';

const API = process.env.TMDB_API;
const API_KEY = process.env.TMDB_API_KEY;

type Collections = Movie;

export const fetchCollection = async ({
  collection,
  url,
  query,
  page,
  path,
}: ApiRequestParams): Promise<ApiResponse<Collections>> => {
  // prepare API params
  const searchQuery = query ? `&query=${encodeURIComponent(query)}` : '';
  const currentPage = page ? `&page=${page}` : '';
  const params = `?api_key=${API_KEY}${searchQuery}${currentPage}`;

  // prepare URL with params
  const fullPath = `${API}/${url}${params}`;

  const response = await fetch(fullPath);
  const data: ApiResponse<Movie> = await response.json();

  return data;
};

export const fetchSimpleData = async (
  path: string
): Promise<ApiResponse<Movie>> => {
  const url = `${API}?api_key=${API_KEY}/${path}`;

  const response = await fetch(url);
  const data: ApiResponse<Movie> = await response.json();

  return data;
};
