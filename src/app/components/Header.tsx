'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
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
    <header className="flex flex-col items-center relative p-4 md:flex-row md:justify-between max-h-14 sm:p-9">
      <div className="flex justify-between w-full md:w-auto">
        <Link href="/">
          <Logo />
        </Link>
        <button
          onClick={handleClick}
          ref={hamburgerMenu}
          className="relative z-10 flex flex-col justify-center items-center md:hidden"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`relative z-10 w-screen md:w-auto md:static md:flex items-center 
        transition-transform duration-300 md:transform-none bg-slate-800/80
        ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
        ref={ref}
      >
        <Navigation setIsOpen={setIsOpen} />
        <div className="px-4 py-4 md:ml-auto">
          {session?.user ? (
            <SignOutButton />
          ) : (
            <Link
              href="/signIn"
              className="group relative px-6 text-lg py-2 text-white"
            >
              <span className="absolute inset-0 border-2 border-white pointer-events-none"></span>
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-red-600 transition-all duration-300 group-hover:w-full"></span>
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-red-600 transition-all duration-300 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-red-600 transition-all duration-300 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-red-600 transition-all duration-300 group-hover:h-full"></span>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
