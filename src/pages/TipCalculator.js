import { motion } from "framer-motion";
import { useState } from "react";
import iconArrow from "../assets/icon-arrow.svg";
import Input from "../components/Input";
import Popup from "../components/Popup";

export default function TipCalculator({ state }) {
  const [people, setPeople] = useState(1);
  const [finalMoney, setFinalMoney] = useState("--");
  const [popup, setPopup] = useState(false);

  const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";
  const textColor = state === "dark" ? "text-white" : "text-black";
  const translation = popup ? "translate-y-0" : "-translate-y-full";

  function splitPeople() {
    let peopleVal = document.getElementById("splitBy").value;
    setPeople(peopleVal);
  }

  function setMoney() {
    let billMoney = parseInt(document.getElementById("billMoney").value);
    let tipPc = parseInt(document.getElementById("tipPc").value);
    let peopleVal = parseInt(document.getElementById("splitBy").value);

    if (!isNaN(billMoney)) {
      let finalCost =
        (billMoney + (isNaN(tipPc) ? 0 : billMoney * (tipPc / 100))) /
        peopleVal;

      let fixedCost = finalCost.toFixed(2);

      setFinalMoney(fixedCost);
    } else {
      setPopup(true);

      setTimeout(() => {
        setPopup(false);
      }, 4000);
    }

    console.log(
      "Bill: " + billMoney + ",tipPc: " + tipPc + ", peopleVal: " + peopleVal
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.67 }}
    >
      <div
        className={`${cardBg} max-w-lg w-full h-full px-8 py-8 sm:px-8 sm:py-8 gap-4 rounded-xl sm:shadow-sm sm:hover:shadow-md transition duration-500 flex flex-col items-center justify-center mt-24 mb-24 mx-4`}
      >
        <section className="flex flex-col w-full 2sm:w-full h-full items-start justify-center">
          <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>
            BILL AMOUNT
          </h2>
          <input
            min={"1"}
            max={"9999999999999"}
            placeholder={"99,99"}
            step="any"
            pattern="\d+(\.\d{1,2})?"
            className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full 2sm:w-20 border border-gray-300 rounded p-2`}
            id="billMoney"
          ></input>
        </section>
        <section className="flex flex-col w-full 2sm:w-full h-full items-start justify-center">
          <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>
            TIP PERCENTAGE
          </h2>
          <div>
            <Input
              min={"1"}
              max={"100"}
              placeholder={"10%"}
              textColor={textColor}
              id="tipPc"
            />
            <span>%</span>
          </div>
        </section>
        <section className="flex flex-col w-full 2sm:w-full h-full items-start justify-center gap-4">
          <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>
            SPLIT BY {people}
          </h2>
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            id="splitBy"
            onChange={splitPeople}
            value={people}
            className="slider"
            style={{
              backgroundImage: `linear-gradient(to right, #864CFF 0%, #864CFF ${
                (people / 12) * 100
              }%, #EDEDED ${(people / 12) * 100}%, #EDEDED 100%)`,
            }}
          ></input>
        </section>
        <section className="w-full relative flex flex-col items-end pt-12 pb-4">
          <a className="w-full h-px border-t-2 pt-4 z-0"></a>
          <button
            className={`absolute bg-purple text-white text-lg flex items-center justify-center w-16 h-16 border border-purple font-bold italic rounded-full p-4 z-10 transition duration-200 sm:hover:scale-110 sm:hover:rotate-45 -translate-y-8`}
            onClick={setMoney}
          >
            <img src={iconArrow} />
          </button>
        </section>
        <section className="flex flex-col w-full 2sm:w-full h-full items-start justify-center">
          <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>
            AMOUNT PER PERSON
          </h2>
          <span
            className={`${textColor} font-black text-2xl italic w-full 2sm:w-20`}
          >
            {finalMoney}
          </span>
        </section>
        <Popup
          title={"ENTER A BILL AMOUNT"}
          cardBg={cardBg}
          translation={translation}
          textColor={textColor}
        />
      </div>
    </motion.div>
  );
}
