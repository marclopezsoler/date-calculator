import CurrenciesSelect from "../components/CurrenciesSelect";
import swapIcon from "../assets/swap.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import convertCurrency from "../components/convertCurrency";

export default function CurrencyChange({ state }) {
  const [moneyChanged, setMoneyChanged] = useState(0);
  const [selectedCurrencies, setSelectedCurrencies] = useState({
    curr1: "USD",
    curr2: "EUR",
  });

  const exchangeRates = {
    USD: {
      EUR: 0.95,
      GBP: 0.82,
    },
    EUR: {
      USD: 1.06,
      GBP: 0.87,
    },
    GBP: {
      USD: 1.22,
      EUR: 1.16,
    },
  };

  const handleSwapCurrencies = () => {
    setSelectedCurrencies((prevSelectedCurrencies) => ({
      curr1: prevSelectedCurrencies.curr2,
      curr2: prevSelectedCurrencies.curr1,
    }));

    setMoneyChanged(0);
  };

  const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";
  const textColor = state === "dark" ? "text-white" : "text-black";

  function changeMoney() {
    const userValue = parseInt(document.getElementById("money").value);
    if (isNaN(userValue)) {
      setMoneyChanged(0);
    } else {
      const convertedAmount = convertCurrency(
        userValue,
        selectedCurrencies.curr1,
        selectedCurrencies.curr2,
        exchangeRates
      );
      setMoneyChanged(convertedAmount);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.67 }}
    >
      <div
        className={`${cardBg} max-w-lg w-full h-full px-8 py-8 sm:px-8 sm:py-8 gap-4 rounded-xl sm:shadow-sm sm:hover:shadow-md transition duration-500 flex flex-col items-start justify-center mt-24 mb-24 mx-6`}
      >
        <section className="flex flex-col w-full h-full items-start justify-center">
          <span
            className={`${textColor} font-bold text-xs pb-1 tracking-widest`}
          >
            AMOUNT:
          </span>
          <input
            type="number"
            min="0"
            placeholder={100}
            className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full border border-gray-300 rounded p-2`}
            id="money"
          ></input>
        </section>
        <section className="flex flex-col 2sm:flex-row w-full h-full gap-2 2sm:gap-8 items-center 2sm:items-end justify-center">
          <CurrenciesSelect
            idVal={"curr1"}
            text={"From:"}
            textColor={textColor}
            currency={selectedCurrencies.curr1}
            onCurrencyChange={(newCurrency) => {
              setSelectedCurrencies({
                ...selectedCurrencies,
                curr1: newCurrency,
              });
            }}
          />

          <button
            className={`bg-purple text-white text-lg flex items-center justify-center w-12 2sm:w-28 h-12 2sm:h-12 border border-purple font-bold italic rounded-full p-2 mx-4 z-10 transition duration-200 sm:hover:scale-110 mt-8 2sm:mt-0`}
            onClick={handleSwapCurrencies}
          >
            <img src={swapIcon} alt="Swap" />
          </button>

          <CurrenciesSelect
            idVal={"curr2"}
            text={"To:"}
            textColor={textColor}
            currency={selectedCurrencies.curr2}
            onCurrencyChange={(newCurrency) => {
              setSelectedCurrencies({
                ...selectedCurrencies,
                curr2: newCurrency,
              });
            }}
          />
        </section>
        <div className="w-full flex flex-col gap-2">
          <button
            className={`rounded-lg w-full bg-purple font-bold p-2 text-white transition duration-200 hover:scale-105`}
            onClick={changeMoney}
          >
            CONVERT
          </button>
          <span
            className={`rounded-lg w-full bg-purpler text-center font-bold p-2 text-white`}
          >
            {moneyChanged} {selectedCurrencies.curr2}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
