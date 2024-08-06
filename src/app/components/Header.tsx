import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from './../api/auth/[...nextauth]/options';
import Logo from './Logo';
import Navigation from './Navigation';
import SignOutButton from './SignOutButton';

const Header = async () => {
  const session = await getServerSession(options);

  return (
    <header className="flex p-8 items-center">
      <Link href="/">
        <Logo />
      </Link>
      <Navigation />
      {session?.user ? (
        <SignOutButton />
      ) : (
        <Link
          className="ml-auto cursor-pointer px-6 py-2 border-2 border-solid hover:border-red-500"
          href="signIn"
        >
          Sign In
        </Link>
      )}
    </header>
  );
};

export default Header;
