import React, { useEffect, useState } from "react";

export default function CurrenciesSelect({ idVal, text, textColor, currency }) {
  const [selectedCurr, setSelectedCurr] = useState(currency);

  useEffect(() => {
    setSelectedCurr(currency);
  }, [currency]);

  const handleSelectedChange = (event) => {
    setSelectedCurr(event.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>
        {text}
      </h2>
      <select
        id={idVal}
        className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full border border-gray-300 rounded p-2`}
        value={selectedCurr}
        onChange={handleSelectedChange}
      >
        <option value={"USD"}>USD</option>
        <option value={"EUR"}>EUR</option>
        <option value={"GBP"}>GBP</option>
      </select>
    </div>
  );
}
