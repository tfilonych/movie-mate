'use server';

import { Movie, ApiResponse } from '../lib/definitions';

const API = process.env.TMDB_API;
const API_KEY = process.env.TMDB_API_KEY;

export const fetchMoviesWithQuery = async (
  query: string,
  page: number
): Promise<ApiResponse<Movie>> => {
  const url = `${API}?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}&page=${page}`;
  const response = await fetch(url);
  const data: ApiResponse<Movie> = await response.json();

  return data;
};
