'use client';

import { useSession } from 'next-auth/react';
import IconWithTooltip from '@/components/IconWithTooltip';
import AddToListIcon from '@/assets/icons/add_to_list.svg';
import HeartIcon from '@/assets/icons/hurt_icon.svg';
import PlayIcon from '@/assets/icons/play_btn_icon.svg';

const IconGroup = () => {
  const { data: session } = useSession();
  return (
    <div className="flex w-fit cursor-pointer gap-6">
      <IconWithTooltip
        Icon={AddToListIcon}
        tooltip={
          session?.user ? 'Add movie to list' : 'Sign in to add to the list'
        }
        additionalClasses="border-s-2 border-solid border-slate-200"
      />
      <IconWithTooltip
        Icon={HeartIcon}
        tooltip={
          session?.user ? 'Mark as Favourite' : 'Sign in to mark as Favourite'
        }
        hoverEffect="hover:text-red-500"
      />
      <IconWithTooltip
        Icon={PlayIcon}
        tooltip="Play Trailer"
        additionalClasses="border-s-2 border-solid"
      />
    </div>
  );
};

export default IconGroup;
