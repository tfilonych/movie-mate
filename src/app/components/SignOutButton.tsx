'use client';

import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <button
      className="ml-auto cursor-pointer px-6 py-2 border-2 border-solid hover:border-red-500"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
