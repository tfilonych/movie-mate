'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav>
      <ul className="flex gap-6 text-xl font-extrabold">
        <li>
          <Link
            href="/movies"
            className={`hover:text-red-500 ${
              isActive('/movies') ? 'text-red-500' : '' // TODO: move to separate component
            }`}
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            href="/shows"
            className={`hover:text-red-500 ${
              isActive('/shows') ? 'text-red-500' : ''
            }`}
          >
            TV Shows
          </Link>
        </li>
        <li>
          <Link
            href="/episodes"
            className={`hover:text-red-500 ${
              isActive('/episodes') ? 'text-red-500' : ''
            }`}
          >
            Episods
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
