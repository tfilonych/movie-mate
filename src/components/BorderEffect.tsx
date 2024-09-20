type BorderEffectProps = {
  borderColor?: string;
};

const BorderEffect = ({
  borderColor = 'border-transparent',
}: BorderEffectProps) => {
  return (
    <>
      <span
        className={`absolute inset-0 border-2 ${borderColor} pointer-events-none`}
      ></span>
      <span
        className={`ease absolute left-0 top-0 h-0 w-0 rounded-tl-md border-t-2 border-brand transition-all duration-300 group-hover:w-full group-focus:w-full`}
      ></span>
      <span
        className={`ease absolute right-0 top-0 h-0 w-0 rounded-tr-md border-r-2 border-brand transition-all duration-300 group-hover:h-full group-focus:h-full`}
      ></span>
      <span
        className={`ease absolute bottom-0 right-0 h-0 w-0 rounded-br-md border-b-2 border-brand transition-all duration-300 group-hover:w-full group-focus:w-full`}
      ></span>
      <span
        className={`ease absolute bottom-0 left-0 h-0 w-0 rounded-bl-md border-l-2 border-brand transition-all duration-300 group-hover:h-full group-focus:h-full`}
      ></span>
    </>
  );
};

export default BorderEffect;
