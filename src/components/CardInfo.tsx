type CardInfoProps = {
  title: string;
  description?: string;
};

const CardInfo = ({ title, description }: CardInfoProps) => {
  return (
    <div className="p-4 flex flex-col my-2 sm:my-0">
      <h3 className="text-md font-bold mb-2">{title}</h3>
      <p className="text-sm text-ellipsis overflow-hidden line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default CardInfo;
