import { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { img_URL, default_URL } from '@/config';

type Layout = 'vertical' | 'horizontal';
type ImageWrapperProps = {
  src: string | StaticImport;
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
  const url = src ? `${img_URL[layout]}${src}` : default_URL[layout];

  return (
    <Image
      alt={title}
      width={width}
      height={height}
      src={url}
      onLoad={() => setIsLoaded(true)}
      onError={handleError}
      className={`transform transition-all duration-200 ease-in-out hover:scale-105 ${
        isLoaded ? '' : 'blur'
      }`}
    />
  );
};

export default ImageWrapper;
