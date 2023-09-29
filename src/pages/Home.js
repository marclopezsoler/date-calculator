import calendarDark from "../assets/calendarDark.svg";
import calendarLight from "../assets/calendarLight.svg";
import moneyDark from "../assets/moneyDark.svg";
import moneyLight from "../assets/moneyLight.svg";
import letterDark from "../assets/letterDark.svg";
import letterLight from "../assets/letterLight.svg";
import petDark from "../assets/petDark.svg";
import petLight from "../assets/petLight.svg";
import colorDark from "../assets/colorDark.svg";
import colorLight from "../assets/colorLight.svg";
import tipDark from "../assets/tipDark.svg";
import tipLight from "../assets/tipLight.svg";
import HomeLinks from "../components/HomeLinks";
import { motion } from "framer-motion";

export default function Home({ state }) {
   const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";
   const textColor = state === "dark" ? "text-white" : "text-pureBlack";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.67 }}
    >
      <div className={`max-w-2xl flex flex-col w-full h-full gap-8 items-center justify-center mt-14 sm:mt-0 pb-14 sm:pb-0 p-4`}>
        <div
          className={`${cardBg} max-w-2xl w-full h-fit px-8 py-8 sm:px-8 sm:py-8 gap-4 rounded-xl sm:shadow-sm sm:hover:shadow-md transition duration-500 flex flex-col items-center justify-center mx-6`}
          >
          <h1 className={`max-w-2xl text-purple text-center transition duration-700 delay-200 font-black italic text-xl`}>WELCOME TO RANDOM CONVERTERS</h1>
        </div>
        <div className="flex flex-col 2sm:grid 2sm:grid-cols-2 gap-8 w-full items-center justify-center">
          <HomeLinks link="/convert-case" width="10" cardBg={cardBg} icon={state === 'dark' ? letterLight : letterDark} textColor={textColor} textValue={"CONVERT CASE"}/>
          <HomeLinks link="/tip-calculator" width="10" cardBg={cardBg} icon={state === 'dark' ? tipLight : tipDark} textColor={textColor} textValue={"TIP CALCULATOR"}/>
          <HomeLinks link="/color-convert" width="10" cardBg={cardBg} icon={state === 'dark' ? colorLight : colorDark} textColor={textColor} textValue={"COLOR CONVERT"}/>
          <HomeLinks link="/age-calculator" width="10" cardBg={cardBg} icon={state === 'dark' ? calendarLight : calendarDark} textColor={textColor} textValue={"AGE CALENDAR"}/>
          <HomeLinks link="/human-to-pet" width="12" cardBg={cardBg} icon={state === 'dark' ? petLight : petDark} textColor={textColor} textValue={"HUMAN TO PET AGE"}/>
          <HomeLinks link="/currency-change" width="12" cardBg={cardBg} icon={state === 'dark' ? moneyLight : moneyDark} textColor={textColor} textValue={"CURRENCY CONVERTER"}/>
        </div>
      </div>
    </motion.div>
  );
}
