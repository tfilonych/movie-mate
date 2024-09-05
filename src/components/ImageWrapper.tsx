'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { img_URL, default_URL, imageSettings } from '@/config';

type Layout = 'vertical' | 'horizontal';
type Orientation = 'landscape' | 'portrait' | 'portraitSm';
type ImageWrapperProps = {
  src: string | StaticImport;
  orientation: Orientation;
  layout: Layout;
  title?: string;
};

const ImageWrapper = ({
  src,
  title = 'some default title',
  layout = 'vertical',
  orientation = 'landscape',
}: ImageWrapperProps) => {
  const { width } = imageSettings[orientation];
  const { width: thubnail } = imageSettings.thumbnail;
  const imgUrl = src
    ? `${img_URL.responsive}/w${width}${src}`
    : default_URL[layout];
  const bgImg = `${img_URL.responsive}/w${thubnail}` + src;
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = default_URL[layout];
  };
  /* fix for dynamic tailwind classes */
  const aspectRatios = {
    portrait: `aspect-portrait`,
    landscape: 'aspect-landscape',
    portraitSm: 'aspect-portraitSm',
  };
  const Elwidth = {
    portrait: `w-portrait`,
    landscape: 'w-landscape',
    portraitSm: 'w-portraitSm',
  };
  /*  end   */

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: '100% 100%',
      }}
      className={`${aspectRatios[orientation]} relative flex h-auto flex-shrink-0 ${Elwidth[orientation]} justify-center`}
    >
      <Image
        alt={title}
        fill
        src={imgUrl}
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={handleError}
        className={`duration-400 transform transition-all ease-in-out hover:scale-105`}
      />
    </div>
  );
};

export default ImageWrapper;
