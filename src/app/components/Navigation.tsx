'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type NavigationProps = {
  setIsOpen: (isOpen: boolean) => void;
};

const navLinks = [
  { href: '/movies', title: 'Movies' },
  { href: '/shows', title: 'TV Shows' },
  { href: '/episods', title: 'Episods' },
];

const Navigation = ({ setIsOpen }: NavigationProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    console.log('pathname has been changed!');
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav>
      <ul className="flex flex-col text-xl md:flex-row gap-4 md:gap-6 p-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative inline-block transition-all duration-500 ease-in-out 
              ${
                isActive(link.href) ? 'text-red-500' : ''
              } after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-red-500
              after:transform after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
