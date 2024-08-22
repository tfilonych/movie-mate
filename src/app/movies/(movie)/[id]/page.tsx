import { Suspense } from 'react';
import CarouselContainer from '@/components/carousel/CarouselContainer';
import Loader from '@/components/Loader';
import CardDetails from './CardDetails';

type MovieParams = {
  id: string;
};
const MoviePage = async ({ params }: { params: MovieParams }) => {
  return (
    <div className="container flex flex-col gap-9">
      <Suspense fallback={<Loader />}>
        <CardDetails id={params.id} />
      </Suspense>
      <CarouselContainer
        title="Recommendations"
        url={`movie/${params.id}/recommendations`}
        collection={'movie'}
        layout={'horizontal'}
      />
    </div>
  );
};

export default MoviePage;
