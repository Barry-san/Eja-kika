import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between p-5 lg:px-14 lg:py-8 w-full bg-primary text-white border-b border-divider relative">
      <NavLink to={"/"}>
        <img src="/logo.png" className="max-h-18 shrink"></img>
      </NavLink>

      <nav
        className={` flex flex-col lg:flex-row items-start w-full lg:w-auto bg-accent-secondary lg:bg-transparent absolute lg:static left-0 top-full gap-2 lg:gap-8 capitalize font-semibold py-1 px-5 ${isOpen ? "visible " : "invisible"} lg:visible`}
      >
        <NavLink
          to={"/"}
          className={"hover:text-accent transition-colors duration-300 "}
        >
          home
        </NavLink>
        <NavLink
          to={"/about"}
          className={"hover:text-accent transition-colors duration-300 "}
        >
          about us
        </NavLink>
        <NavLink
          to={"/products"}
          className={"hover:text-accent transition-colors duration-300 "}
        >
          products
        </NavLink>
        <NavLink
          to={"/contact"}
          className={"hover:text-accent transition-colors duration-300"}
        >
          contact us
        </NavLink>
      </nav>

      <Link
        to={"/products"}
        className="hidden lg:flex gap-2 justify-between px-4 py-3.5  bg-accent rounded-lg font-bold capitalize"
      >
        Order now
        <img src="src/assets/icons/arrow-white.svg" />
      </Link>

      <button
        className="lg:hidden w-9 h-9 bg-accent rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">menu</span>
        <span className="block bg-white h-0.75 w-5.5 rounded my-1 mx-auto"></span>
        <span className="block bg-white h-0.75 w-5.5 rounded my-1 mx-auto"></span>
        <span className="block bg-white h-0.75 w-5.5 rounded my-1 mx-auto"></span>
      </button>
    </header>
  );
}
