'use client';

import { Movie } from '@/app/lib/definitions';
import { withInfiniteScroll } from '../../hoc/InfiniteScroll';
import withHorizontalLayout from '../../hoc/withHorizontalLayout';
import DataList from './DataList';

const InfiniteScrollCarousel = withInfiniteScroll<Movie>(DataList);
export const HorizontalInfiniteScrollCarousel = withHorizontalLayout(
  InfiniteScrollCarousel
);
