import menuLight from "../assets/menuLight.svg";
import menuDark from "../assets/menuDark.svg";
import closeLight from "../assets/closeLight.svg";
import closeDark from "../assets/closeDark.svg";
import { useEffect, useState } from "react";

export default function Menu({ state }) {
  const [isOpen, setOpenClose] = useState(false);
  const [icon, setIcon] = useState(menuLight);

  const switchBg = state === "light" ? "bg-white" : "bg-pureBlack";
  const textColor = state === "light" ? "text-white" : "text-black";

  const translation = isOpen ? "" : "translate-x-full";

  function menuMove() {
    setOpenClose(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      if (state == "dark") {
        setIcon(closeLight);
      } else {
        setIcon(closeDark);
      }
    } else {
      if (state == "dark") {
        setIcon(menuLight);
      } else {
        setIcon(menuDark);
      }
    }
  }, [isOpen, state]);

  return (
    <>
      <button
        className={`${switchBg} absolute shadow-sm hover:shadow-md p-2 w-10 h-10 rounded-full top-0 mt-6 transition duration-500 sm:hover:scale-110 z-30`}
      >
        <img
          className="transition duration-500"
          src={icon}
          alt="Toggle Menu"
          onClick={menuMove}
        />
      </button>
      <div
        className={`bg-purple absolute w-screen h-screen z-20 transition duration-500 ${translation}`}
      >
        <section className="flex flex-col items-center justify-center w-screen h-screen">
          <a className={`${textColor} font-bold italic text-xl`}>TEST 1</a>
          <a className={`${textColor} font-bold italic text-xl`}>TEST 2</a>
          <a className={`${textColor} font-bold italic text-xl`}>TEST 3</a>
          <a className={`${textColor} font-bold italic text-xl`}>TEST 4</a>
        </section>
      </div>
    </>
  );
}
