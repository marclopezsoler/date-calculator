import CurrenciesSelect from "../components/CurrenciesSelect";
import swapIcon from "../assets/swap.svg";
import { useState } from "react";
import { motion } from "framer-motion";

function Coins({ state }) {
  const [moneyChanged, setMoney] = useState(0);
  const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";
  const textColor = state === "dark" ? "text-white" : "text-black";

  function changeMoney(){
    const userValue = parseInt(document.getElementById("money").value);
    (isNaN(userValue)) ? setMoney(0) : setMoney(userValue);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.67 }}
    >
      <div className={`${cardBg} max-w-lg w-full h-fit px-12 py-12 gap-8 rounded-xl shadow-sm hover:shadow-md transition duration-500 flex flex-col items-start justify-center`}>
        <section className="flex flex-col w-full  h-fit items-start justify-center">
          <span className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>AMOUNT:</span>
          <input
          type="number"
          min="0"
          placeholder={100}
          className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full border border-gray-300 rounded p-2`}
          id="money"
          ></input>
        </section>
        <section className="flex flex-row w-full gap-8 items-end justify-center">
          <CurrenciesSelect text={"From:"} textColor={textColor}/>
          <button className={`bg-purple text-white text-lg flex items-center justify-center w-32 h-12 border border-purple font-bold italic rounded-full p-2 mx-4 z-10 transition duration-200 sm:hover:scale-110`}>
              <img src={swapIcon}/>
          </button>
          <CurrenciesSelect text={"To:"} textColor={textColor}/>
        </section>
        <div className="w-full flex flex-col gap-2">
          <button className={`rounded-lg w-full bg-purple font-bold p-2 text-white transition duration-200 hover:scale-105`} onClick={changeMoney}>CONVERT</button>
          <span className={`rounded-lg w-full bg-purpler text-center font-bold p-2 text-white`}>{moneyChanged}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Coins;
