'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import LogoIcon from '@/assets/icons/logo.svg';
import Navigation from './Navigation';
import SignOutButton from './SignOutButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hamburgerMenu = useRef<HTMLButtonElement>(null);
  const { data: session } = useSession();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !hamburgerMenu.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <header className="relative flex max-h-14 flex-col items-center p-4 sm:p-12 md:flex-row md:justify-between">
      <div className="flex w-full justify-between md:w-auto">
        <Link href="/">
          <LogoIcon className="font-starwars" />
        </Link>
        <button
          onClick={handleClick}
          ref={hamburgerMenu}
          className="relative z-10 flex flex-col items-center justify-center md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
              isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`relative z-10 w-screen flex-1 items-center bg-slate-800/70 transition-transform duration-300 sm:bg-transparent md:static md:flex md:w-auto md:transform-none ${isOpen ? 'translate-x-0 transform' : '-translate-x-full transform'}`}
        ref={ref}
      >
        <Navigation setIsOpen={setIsOpen} />
        <div className="px-4 py-4 md:ml-auto">
          {session?.user ? (
            <SignOutButton />
          ) : (
            <Link
              href="/signIn"
              className="group relative px-7 py-3 text-lg text-white"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
