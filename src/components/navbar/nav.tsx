import Logo from "./logo";
import NavLinks from "./navlinks";


const Navbar = () => {
  return (
    <header className="w-full border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Navbar;
