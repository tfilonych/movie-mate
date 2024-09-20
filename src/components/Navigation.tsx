'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type NavigationProps = {
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
};

const navLinks = [
  { href: '/movies', title: 'Movies' },
  { href: '/shows', title: 'TV Shows' },
  { href: '/episodes', title: 'Episodes' },
];

const Navigation = ({ setIsOpen }: NavigationProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    console.log('pathname has been changed!');
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <nav>
      <ul className="text-bold flex flex-col gap-4 p-4 text-xl md:flex-row md:gap-6 md:pl-32">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative inline-block text-2xl transition-all duration-500 ease-in-out ${
                isActive(link.href) ? 'text-brand' : ''
              } after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:scale-x-0 after:transform after:bg-brand after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100`}
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
