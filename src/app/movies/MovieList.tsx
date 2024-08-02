import Image from 'next/image';
import { Movie } from '../lib/definitions';

const TMDB_API_IMG = 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2';

type MovieListProps = {
  data: Movie[];
};

const MovieList = ({ data }: MovieListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
      {data.map((movie) => (
        <div key={movie.id} className="flex flex-col cursor-pointer">
          <Image
            alt={movie.title}
            width={500}
            height={750}
            src={`${TMDB_API_IMG}${movie.poster_path}`}
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
