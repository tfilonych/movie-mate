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
  queryKey?: string[];
};

type ProductionCountry = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCompany = {
  iso_3166_1: string;
  name: string;
};

type Genre = {
  id: number;
  name: string;
};

type MovieCollection = {
  id: 1022790;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type OriginCountry = string;

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: MovieCollection;
  budget: 200000000;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: OriginCountry[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
