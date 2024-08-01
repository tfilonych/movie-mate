import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/shows">TV Shows</Link>
        </li>
        <li>
          <Link href="/episods">Episods</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
