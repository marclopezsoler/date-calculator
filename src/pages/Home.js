import calendarDark from "../assets/calendarDark.svg";
import calendarLight from "../assets/calendarLight.svg";
import moneyDark from "../assets/moneyDark.svg";
import moneyLight from "../assets/moneyLight.svg";
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
      <div className="max-w-2xl flex flex-col w-full h-full gap-8 items-center justify-center">
        <div
          className={`${cardBg} max-w-2xl w-full h-fit px-12 py-12 rounded-xl shadow-sm hover:shadow-md transition duration-500 flex flex-col items-center justify-center`}
          >
          <h1 className={`max-w-2xl text-purple text-center transition duration-700 delay-200 font-black italic text-xl`}>WELCOME TO RANDOM CONVERTERS</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full">
          <HomeLinks width="8" cardBg={cardBg} icon={state === 'dark' ? calendarLight : calendarDark} textColor={textColor} textValue={"AGE CALENDAR"}/>
          <HomeLinks width="12" cardBg={cardBg} icon={state === 'dark' ? moneyLight : moneyDark} textColor={textColor} textValue={"CURRENCY CONVERTER"}/>
        </div>
      </div>
    </motion.div>
  );
}
