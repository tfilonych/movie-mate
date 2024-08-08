'use client';

import Image from 'next/image';
import { Movie } from '@/app/lib/definitions';

const TMDB_API_IMG = process.env.NEXT_PUBLIC_TMDB_API_IMG_HOR;

type DataListProps = {
  data: Movie[];
};

const DataList = ({ data }: DataListProps) => {
  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="cursor-pointer w-full">
          <div className="relative w-56">
            <Image
              alt={item.title}
              width={355}
              height={200}
              src={`${TMDB_API_IMG}${item.backdrop_path}`}
              className="transition duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-bold mb-2">{item.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default DataList;
