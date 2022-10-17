import Brand from "../brand/brandLogo";
import NavItems from "./navitem";
import { useState, useEffect } from "react";
import HamburgerButton from "../button/hamburger";

export default function NavigationBar() {
  const [menu, setMenu] = useState(false);
  const [wpos, setWpos] = useState();
  const handleWindow = () => {
    setWpos(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleWindow);
    return window.removeEventListener("scroll", handleWindow);
  }, []);

  return (
    <nav className={`fixed z-10 w-full top-0`}>
      <div className="relative h-14 flex items-center justify-center">
        <div
          className={`flex justify-between items-center w-full px-5 z-10 backdrop-blur-sm h-full bg-gradient-to-b from-white to-gray-100/90 duration-300 border-b-2 ${
            menu ? "border-rose-500 shadow-lg" : "border-white"
          } `}
        >
          <div className="flex items-center sm:justify-between w-full ">
            <Brand />
            <div className="hidden ml-2 sm:flex">
              <NavItems url="#">Home</NavItems>
              <NavItems url="#">About</NavItems>
              <NavItems url="#">Contact</NavItems>
            </div>
          </div>
          <div
            onClick={() => setMenu(menu ? false : true)}
            className="sm:hidden cursor-pointer outline-gray-700 group"
          >
            <HamburgerButton isEvent={menu} />
          </div>
        </div>
        <div
          className={`${
            menu ? "top-full" : "top-0 -translate-y-full "
          } flex flex-col absolute transition-all w-full bg-gray-100/90 backdrop-blur-sm py-4 px-5`}
        >
          <NavItems url="#">Home</NavItems>
          <NavItems url="#">About</NavItems>
          <NavItems url="#">Contact</NavItems>
        </div>
      </div>
    </nav>
  );
}
