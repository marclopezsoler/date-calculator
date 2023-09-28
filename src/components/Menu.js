import { useEffect, useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom";

export default function Menu({ state }) {
  const [isOpen, setOpenClose] = useState(false);

  const switchBg = state === "light" ? "bg-white" : "bg-pureBlack";
  const textColor = state === "light" ? "text-white" : "text-pureBlack";
  const menuColor = state === "light" ? "#000000" : "#FFFFFF";

  const translation = isOpen ? "" : "translate-x-full";

  function menuMove() {
    setOpenClose(!isOpen);
  }

  return (
    <>
      <button
        className={`${switchBg} absolute flex items-center justify-center shadow-sm hover:shadow-md p-0 m-2 w-12 h-12 rounded-full top-0 mt-6 transition duration-500 sm:hover:scale-110 z-30`}
      >
        <Hamburger className="transition duration-500 p-0 m-0 " size={20} color={menuColor} onToggle={menuMove} />
      </button>
      <div
        className={`bg-purple absolute w-screen h-screen z-20 transition duration-500 ${translation}`}
      >
        <section className="flex flex-col items-center justify-center w-screen h-screen">
          <Link to="/" className={`${textColor} transition duration-500 font-bold italic text-xl`} onClick={menuMove}>AGE CALCULATOR</Link>
          <Link to="/coins" className={`${textColor} transition duration-500 font-bold italic text-xl`} onClick={menuMove}>COINS</Link>
        </section>
      </div>
    </>
  );
}
