'use client';

import { withInfiniteScroll } from '../components/InfiniteScroll';
import MovieList from './MovieList';
import { Movie } from '../lib/definitions';

const MovieListWithScroll = withInfiniteScroll<Movie>(MovieList);

export default MovieListWithScroll;
