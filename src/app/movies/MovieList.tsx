import Image from 'next/image';
import { Movie } from '../lib/definitions';

const TMDB_API_IMG = process.env.NEXT_PUBLIC_TMDB_API_IMG;

type MovieListProps = {
  data: Movie[];
  itemClassName?: string;
};

const MovieList = ({ data, itemClassName = '' }: MovieListProps) => {
  return (
    <>
      {data.map((movie) => (
        <div
          key={movie.id}
          className={`flex flex-col cursor-pointer ${itemClassName}`}
        >
          <Image
            alt={movie.title}
            width={500}
            height={750}
            src={`${TMDB_API_IMG}${movie.poster_path}`}
            className="transition duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
