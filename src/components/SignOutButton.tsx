'use client';

import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <button
      className="group relative px-7 py-3 text-lg text-white"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
