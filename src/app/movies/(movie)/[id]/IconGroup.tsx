'use client';

import { useSession } from 'next-auth/react';
import IconWithTooltip from '@/components/IconWithTooltip';
import AddToListIcon from '@/assets/icons/add_to_list.svg';
import HeartIcon from '@/assets/icons/hurt_icon.svg';
import PlayIcon from '@/assets/icons/play_btn_icon.svg';
// import { MovieDetails } from '@/libs/definitions';
// import { updateUser } from '../../actions';
import toast from 'react-hot-toast';

const IconGroup = () => {
  const { data: session } = useSession();
  // const addToWatchList = (id: number) => {
  // };
  // const addToFavourite = () => {};
  const openPlayer = () => {};
  // const onClickHandler = async (val: string) => {
  //   try {
  //     await updateUser(val, movie.id);
  //     toast.success('Movie has been added to the list!');
  //   } catch {
  //     toast.error('');
  //   }
  // };

  return (
    <div className="flex w-fit cursor-pointer gap-6">
      <IconWithTooltip
        Icon={AddToListIcon}
        tooltip={
          session?.user ? 'Add movie to list' : 'Sign in to add to the list'
        }
        onClickHandler={() => {
          // addToWatchList;
          toast.success('Movie has been added to the Watch List!', {
            style: {
              textShadow: 'none',
            },
          });
        }}
        additionalClasses="border-s-2 border-solid border-slate-200"
      />
      <IconWithTooltip
        Icon={HeartIcon}
        tooltip={
          session?.user ? 'Mark as Favourite' : 'Sign in to mark as Favourite'
        }
        onClickHandler={() => {
          // addToFavourite;
          toast.success('Movie has been added to the Favourite List!', {
            style: {
              textShadow: 'none',
            },
          });
        }}
        hoverEffect="hover:text-brand"
      />
      <IconWithTooltip
        Icon={PlayIcon}
        tooltip="Play Trailer"
        onClickHandler={openPlayer}
        additionalClasses="border-s-2 border-solid"
      />
    </div>
  );
};

export default IconGroup;
