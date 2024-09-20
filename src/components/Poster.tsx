'use client';

function Poster() {
  const textToIterate = 'Discover movies tailored to your taste';

  return (
    <div className="relative h-96 w-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-10 text-white">
        <div className="animate-scale font-starwars text-7xl md:text-9xl">
          Movie
        </div>
        <div className="animate-fadeUp font-starwars text-sm opacity-0">
          {textToIterate}
        </div>
        <div className="animate-scale font-starwars text-7xl text-brand md:text-9xl">
          Space
        </div>
      </div>
    </div>
  );
}

export default Poster;
