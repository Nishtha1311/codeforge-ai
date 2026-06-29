import Logo from "../common/Logo";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#09090B]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <Logo />

        <nav className="hidden items-center gap-8 text-gray-300 md:flex">
          <a
            href="#"
            className="transition hover:text-white"
          >
            Problems
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Contest
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;