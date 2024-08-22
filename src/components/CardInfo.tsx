import { ReactNode } from 'react';

type CardInfoProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

const CardInfo = ({ title, description, children }: CardInfoProps) => {
  return (
    <div className="my-2 flex flex-col gap-4 p-4 sm:my-0">
      <h3 className="text-md mb-2 font-bold">{title}</h3>
      <p className="line-clamp-3 overflow-hidden text-ellipsis text-sm">
        {description}
      </p>
      {children}
    </div>
  );
};

export default CardInfo;
