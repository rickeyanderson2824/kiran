import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul flex justify-between">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li gap-4 ">
          <a href={href} className="nav-li_a ">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header
      className={` w-full top-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "fixed translate-y-0 bg-black bg-opacity-90"
          : "bg-transparent relative"
      }`}
    >
      <div
        className="  rounded-xl"
        style={{
          padding: "15px",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-white font-bold text-xl hover:text-white transition-colors"
          >
            <div>
              <span className="font-semibold text-pretty text-3xl text-[#FFBA0A]">
                Film Maker |
              </span>
              <span className="font-semibold text-pretty text-3xl text-[#FFBA0A]">
                {" "}
                Producer
              </span>
            </div>
            <div className="ms-14 mt-2">
              <span className="font-semibold text-pretty text-3xl text-[#FFBA0A]   ">
                Kedar
              </span>
              <span className="font-semibold text-pretty text-3xl text-white">
                {" "}
                Bhusal
              </span>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="sm:flex hidden  ">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`nav-sidebar overflow-hidden transition-[max-height] duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5 bg-black/50 backdrop-blur-md">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
