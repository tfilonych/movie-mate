'use client';

import { signOut } from 'next-auth/react';
import BorderEffect from './BorderEffect';

const SignOutButton = () => {
  return (
    <button
      className="group relative ml-auto cursor-pointer px-6 py-2"
      onClick={() => signOut()}
    >
      Sign Out
      <BorderEffect borderColor="white" />
    </button>
  );
};

export default SignOutButton;
