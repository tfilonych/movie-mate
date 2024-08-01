'use client';

import { useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://5vi2bjp25a.execute-api.us-east-1.amazonaws.com/Prod/notes'
      );
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <header className="flex p-8 items-center">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
