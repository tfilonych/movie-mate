'use client';

import { withInfiniteScroll } from '../hoc/InfiniteScroll';
import MovieList from './MovieList';
import { Movie } from '../lib/definitions';
// import withHorizontalLayout from '../hoc/withHorizontalLayout';
import withVerticalLayout from '../hoc/withVerticalLayout';

const InfiniteScrollMovieList = withInfiniteScroll<Movie>(MovieList);
// export const HorizontalInfiniteScrollMovieList = withHorizontalLayout(InfiniteScrollMovieList);
export const VerticalInfiniteScrollMovieList = withVerticalLayout(InfiniteScrollMovieList);