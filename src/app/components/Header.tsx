import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="flex p-8 items-center">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
