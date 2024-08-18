type BorderEffectProps = {
  event: string;
  utility: string;
  borderColor?: string;
};

const BorderEffect = ({
  event,
  utility = 'group',
  borderColor = 'transparent',
}: BorderEffectProps) => {
  return (
    <>
      <span
        className={`absolute inset-0 border-2 border-${borderColor} pointer-events-none`}
      ></span>
      <span
        className={`ease absolute left-0 top-0 h-0 w-0 rounded-tl-md border-t-2 border-red-500 transition-all duration-300 ${utility}-${event}:w-full`}
      ></span>
      <span
        className={`ease absolute right-0 top-0 h-0 w-0 rounded-tr-md border-r-2 border-red-500 transition-all duration-300 ${utility}-${event}:h-full`}
      ></span>
      <span
        className={`ease absolute bottom-0 right-0 h-0 w-0 rounded-br-md border-b-2 border-red-500 transition-all duration-300 ${utility}-${event}:w-full`}
      ></span>
      <span
        className={`ease absolute bottom-0 left-0 h-0 w-0 rounded-bl-md border-l-2 border-red-500 transition-all duration-300 ${utility}-${event}:h-full`}
      ></span>
    </>
  );
};

export default BorderEffect;
