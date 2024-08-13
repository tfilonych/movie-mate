import Image from 'next/image';
import { useState } from 'react';

const img_URL = {
  horizontal: process.env.NEXT_PUBLIC_TMDB_API_IMG_HOR,
  vertical: process.env.NEXT_PUBLIC_TMDB_API_IMG,
};
const default_URL = {
  horizontal: 'http://localhost:3000/default_horizontal.jpg',
  vertical: 'http://localhost:3000/default_vertical.jpg',
};

type Layout = 'vertical' | 'horizontal';
type ImageWrapperProps = {
  src: string;
  width: number;
  height: number;
  title?: string;
  layout: Layout;
};

const ImageWrapper = ({
  src,
  width,
  height,
  title = 'some default title',
  layout = 'vertical',
}: ImageWrapperProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = default_URL[layout];
  };

  return (
    <Image
      alt={title}
      width={width}
      height={height}
      src={`${img_URL[layout]}${src}`}
      onLoad={() => setIsLoaded(true)}
      onError={handleError}
      className={`transition-all duration-200 ease-in-out transform hover:scale-105 ${
        isLoaded ? '' : 'blur'
      }`}
    />
  );
};

export default ImageWrapper;
