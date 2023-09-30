import { useState } from "react";
import iconArrow from "../assets/icon-arrow.svg";
import AgeInput from "../components/AgeInput";
import AgeResult from "../components/AgeResult";
import { motion } from "framer-motion";
import Popup from "../components/Popup";

function AgeCalculator({ state }) {
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");
  const [dayText, setDayText] = useState("days");
  const [monthText, setMonthText] = useState("months");
  const [yearText, setYearText] = useState("years");
  const [popup, setPopup] = useState(false);

  let today = new Date();
  let todayDay = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();

  function setDate() {
    let dayValue = parseInt(document.getElementById("day").value);
    let monthValue = parseInt(document.getElementById("month").value);
    let yearValue = parseInt(document.getElementById("year").value);

    if (!isNaN(dayValue) && !isNaN(monthValue) && !isNaN(yearValue)) {
      let birth = new Date(yearValue, monthValue - 1, dayValue);

      if (birth > today) {
        setDays("--");
        setMonths("--");
        setYears("--");
        setDayText("days");
        setMonthText("months");
        setYearText("years");
        setPopup(true);

        setTimeout(() => {
          setPopup(false);
        }, 4000);
      } else {
        let timeDiff = today - birth;
        let ageDate = new Date(timeDiff);

        let calculatedDays = ageDate.getDate() - 1;
        let calculatedMonths = ageDate.getMonth();
        let calculatedYears = ageDate.getFullYear() - 1970;

        setDays(calculatedDays);
        setMonths(calculatedMonths);
        setYears(calculatedYears);

        if (dayValue === todayDay - 1) {
          setDayText("day");
        } else {
          setDayText("days");
        }

        if (monthValue === todayMonth - 1) {
          setMonthText("month");
        } else {
          setMonthText("months");
        }

        if (yearValue === todayYear - 1) {
          setYearText("year");
        } else {
          setYearText("years");
        }
      }
    }
  }

  const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";
  const h1Color = state === "dark" ? "text-white" : "text-black";
  const textColor = state === "dark" ? "text-white" : "text-gray-400";
  const translation = popup ? "translate-y-0" : "-translate-y-full";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.67 }}
    >
      <div
        className={`${cardBg} max-w-lg w-full h-full px-8 py-8 sm:px-8 sm:py-8 gap-4 rounded-xl 2sm:shadow-sm 2sm:hover:shadow-md transition duration-500 flex flex-col items-center justify-center mt-24 mb-24`}
      >
        <section className="flex flex-col 2sm:flex-row gap-4 2sm:gap-6 w-full items-center justify-center">
          <AgeInput
            textColor={textColor}
            titleValue={"DAY"}
            min={1}
            max={31}
            plaecholder={"DD"}
            id={"day"}
          />
          <AgeInput
            textColor={textColor}
            titleValue={"MONTH"}
            min={1}
            max={12}
            plaecholder={"MM"}
            id={"month"}
          />
          <AgeInput
            textColor={textColor}
            titleValue={"YEAR"}
            min={100}
            max={todayYear}
            plaecholder={"YYYY"}
            id={"year"}
          />
        </section>
        <section className="w-full relative flex flex-col items-end pt-12 pb-4">
          <a className="w-full h-px border-t-2 pt-4 z-0"></a>
          <button
            className={`absolute bg-purple text-white text-lg flex items-center justify-center w-16 h-16 border border-purple font-bold italic rounded-full p-4 z-10 transition duration-200 sm:hover:scale-110 sm:hover:rotate-45 -translate-y-8`}
            onClick={setDate}
          >
            <img src={iconArrow} />
          </button>
        </section>
        <section className="flex flex-col w-full">
          <AgeResult h1Color={h1Color} result={days} titleText={dayText} />
          <AgeResult h1Color={h1Color} result={months} titleText={monthText} />
          <AgeResult h1Color={h1Color} result={years} titleText={yearText} />
        </section>
        <Popup
          title={"BIRTH DATE CAN'T BE IN THE FUTURE"}
          cardBg={cardBg}
          translation={translation}
          textColor={textColor}
        />
      </div>
    </motion.div>
  );
}

export default AgeCalculator;
