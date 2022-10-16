import Brand from "../brand";
import { MdArrowBackIos } from "react-icons/md";
import Hamburger from "../hamburger";
import NavItems from "./navitem";
import { useState } from "react";
export default function NavigationBar() {
  const [menu, setMenu] = useState(false);
  function HandleMenu() {
    setMenu(menu ? false : true);
  }
  return (
    <nav className=" sm:py-0 py-4 px-5 bg-gradient-to-b from-gray-50 to-gray-100 border-b-2 border-gray-300 drop-shadow-md">
      <div className="flex sm:py-3 justify-between items-center">
        <div className="flex items-center sm:justify-between w-full">
          <Brand />
          <div className="hidden ml-2 sm:flex">
            <NavItems url="#">Home</NavItems>
            <NavItems url="#">About</NavItems>
            <NavItems url="#">Contact</NavItems>
          </div>
        </div>
        <div onClick={HandleMenu} className="sm:hidden">
          <Hamburger event={menu} />
        </div>
      </div>
      <button
        className={`${
          menu ? "flex" : "hidden"
        } flex-col w-full justify-center items-center sm:hidden my-2`}
      >
        <NavItems url="#">Home</NavItems>
        <NavItems url="#">About</NavItems>
        <NavItems url="#">Contact</NavItems>
      </button>
    </nav>
  );
}
