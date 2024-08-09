import Image from 'next/image';
import { useState } from 'react';

const TMDB_API_IMG = process.env.NEXT_PUBLIC_TMDB_API_IMG_HOR;
const FALLBACK_IMG = 'http://localhost:3000/default_horizontal.jpg';

type ImageWrapperProps = {
  src: string;
  width: number;
  height: number;
  title?: string;
  placeholder?: string;
};

const ImageWrapper = ({
  src,
  width,
  height,
  title = 'some default title',
  placeholder,
}: ImageWrapperProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.srcset = FALLBACK_IMG;
  };

  return (
    <div
      className={`relative bg-slate-700 flex-shrink-0`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        alt={title}
        width={width}
        height={height}
        src={`${TMDB_API_IMG}${src}`}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`transition-all duration-500 ease-in-out transform hover:scale-105 ${
          isLoaded ? '' : 'blur'
        }`}
      />
    </div>
  );
};

export default ImageWrapper;
