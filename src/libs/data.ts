'use server';

import { ApiResponse, ApiRequestParams, MovieDetails } from './definitions';

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

  try {
    const response = await fetch(fullPath);
    const data: ApiResponse<T> = await response.json();
    return data;
  } catch {
    throw new Error('Failed to fetch collection');
  }
};

export const fetchMovie = async (id: string): Promise<MovieDetails> => {
  try {
    const response = await fetch(`${API}/movie/${id}?api_key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch movie with ID: ${id}`);
    }

    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
};
