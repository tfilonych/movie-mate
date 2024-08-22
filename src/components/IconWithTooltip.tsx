import { ComponentType, SVGProps } from 'react';

type IconWithTooltipProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  tooltip: string;
  hoverEffect?: string;
  additionalClasses?: string;
};

const IconWithTooltip = ({
  Icon,
  tooltip,
  hoverEffect = 'hover:scale-110',
  additionalClasses = '',
}: IconWithTooltipProps) => (
  <div
    className={`group relative rounded-full p-1 transition-all duration-300 ${hoverEffect} ${additionalClasses}`}
  >
    <Icon />
    <div className="invisible absolute left-0 top-12 w-max text-sm text-slate-400 group-hover:visible">
      {tooltip}
    </div>
  </div>
);

export default IconWithTooltip;
