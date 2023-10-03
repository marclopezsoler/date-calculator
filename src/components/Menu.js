import { useEffect, useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function Menu({ state }) {
  const [isOpen, setOpenClose] = useState(false);

  const switchBg = state === "light" ? "bg-white" : "bg-pureBlack";
  const textColor = state === "light" ? "text-white" : "text-pureBlack";
  const menuColor = state === "light" ? "#000000" : "#FFFFFF";

  const translation = isOpen ? "" : "-translate-x-full";
  const translateText = isOpen ? "" : "-translate-x-full";

  function menuMove() {
    setOpenClose(!isOpen);
  }

  function closeMenu() {
    setOpenClose(false);
  }

  return (
    <>
      <button
        className={`${switchBg} overflow-y-hidden absolute flex items-center justify-center shadow-sm hover:shadow-md p-0 m-2 w-12 h-12 rounded-full top-4 transition duration-500 sm:hover:scale-110 z-30`}
      >
        <Hamburger direction="right" className="transition duration-500 p-0 m-0 " size={20} color={menuColor} toggled={isOpen} toggle={menuMove} />
      </button>
      <div
        className={`bg-purple absolute w-screen h-screen z-20 transition duration-500 ease-out ${translation}`}
      >
        <section className="flex flex-col gap-8 items-center justify-center w-screen h-screen p-4">
          <Link to="/" onClick={closeMenu} className="transition duration-200 sm:hover:scale-105 text-center"><LinkButton textColor={textColor} textValue={"HOME"} fontSize={'text-lg2 2sm:text-xl'} translateText={translateText}/></Link>
          <Link to="/convert-case" onClick={closeMenu} className="transition duration-200 sm:hover:scale-105 text-center"><LinkButton textColor={textColor} textValue={"CASE CONVERT"} fontSize={'text-lg2 2sm:text-xl'} translateText={translateText}/></Link>
          <Link to="/tip-calculator" onClick={closeMenu} className="transition duration-200 sm:hover:scale-105 text-center"><LinkButton textColor={textColor} textValue={"TIP CALCULATOR"} fontSize={'text-lg2 2sm:text-xl'} translateText={translateText}/></Link>
          <Link to="/age-calculator" onClick={closeMenu} className="transition duration-200 sm:hover:scale-105 text-center"><LinkButton textColor={textColor} textValue={"AGE CALCULATOR"} fontSize={'text-lg2 2sm:text-xl'} translateText={translateText}/></Link>
          <Link to="/currency-change" onClick={closeMenu} className="transition duration-200 sm:hover:scale-105 text-center"><LinkButton textColor={textColor} textValue={"CURRENCY CONVERTER"} fontSize={'text-lg2 2sm:text-xl'} translateText={translateText}/></Link>
        </section>
      </div>
    </>
  );
}
