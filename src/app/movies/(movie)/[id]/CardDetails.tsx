// TODO: Move to component folder
import ImageWrapper from '@/components/ImageWrapper';
import VoteAverageIndicator from '@/components/VoteAverageIndicator';
import { fetchMovie } from '@/libs/data';
import { convertMinutes } from '@/libs/utils';
import IconGroup from './IconGroup';

const CardDetails = async ({ id }: { id: string }) => {
  const movie = await fetchMovie(id);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 sm:flex-row">
      <ImageWrapper
        src={movie.poster_path}
        orientation="portrait"
        layout="vertical"
      />
      <div className="flex w-4/5 flex-col gap-4">
        <div className="text-3xl">{movie.title}</div>
        <div>{movie.overview}</div>
        <div className="flex gap-6">
          <span>{movie.release_date}</span>
          <span>{convertMinutes(movie.runtime)}</span>
        </div>
        <VoteAverageIndicator voteAverage={movie.vote_average} />
        <IconGroup />
      </div>
    </div>
  );
};

export default CardDetails;
