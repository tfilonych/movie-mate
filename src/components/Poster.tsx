import React from 'react';
import Image from 'next/image';
import Search from './search/Search';

function Poster() {
  return (
    <div className="relative h-96 w-full">
      <Image
        alt="poster"
        src="/poster.jpg"
        fill
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-t from-black via-transparent to-transparent p-10 text-white">
        <header className="mb-4">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Welcome.
          </h1>
        </header>
        <div className="text-lg sm:text-xl lg:text-2xl">
          <p>Millions of movies, TV shows and episodes to discover.</p>
          <p>Explore now.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-10">
          <Search placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default Poster;
