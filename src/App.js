import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState('dark');
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  function changeBg(){
    if(state == 'dark'){
      setState('light');
    } else{
      setState('dark');
    }
  }

  function setDate(){
    let dayValue = document.getElementById("day").value;
    let monthValue = document.getElementById("month").value;
    let yearValue = document.getElementById("year").value;

    if(dayValue != "" && monthValue != "" && yearValue != ""){

      
      let today = new Date();
      let todayDay = today.getDay();
      let todayMonth = today.getMonth();
      let todayYear = today.getFullYear();
      
      if(dayValue == ""){
        dayValue = todayDay;
      }
      if(monthValue == ""){
        monthValue = todayMonth;
      }
      if(yearValue == ""){
        yearValue = todayYear;
      }
      
      setDays(todayDay - dayValue);
      setMonths(todayMonth - monthValue);
      setYears(todayYear - yearValue);
    }
  }

  const mainBg = state === 'dark' ? 'bg-gray-400' : 'bg-gray-200';
  const cardBg = state === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <div>
      <header>
      </header>
      <body className={`${mainBg} w-screen h-screen flex relative items-center justify-center p-4 transition duration-300`}>
        <button onClick={changeBg} className="absolute">{state}</button>
        <div className={`${cardBg} max-w-lg w-full h-fit px-12 py-12 gap-4 rounded-xl shadow-md hover:shadow-2xl transition duration-500 flex flex-col items-start justify-center`}>
          <section className="flex flex-row gap-6 w-3/4 items-center justify-center">
            <div className="flex flex-col w-fit h-fit items-start justify-center">
              <h2 className="text-gray-400 font-bold text-xs pb-1 tracking-widest">DAY</h2>
              <input type="number" min="1" max="31" placeholder="DD" className="text-black font-bold w-20 border border-gray-300 rounded p-2" id="day"></input>
            </div>
            <div className="flex flex-col w-fit h-fit items-start justify-center">
              <h2 className="text-gray-400 font-bold text-xs pb-1 tracking-widest">MONTH</h2>
              <input type="number" min="1" max="12" placeholder="MM" className="text-black font-bold w-20 border border-gray-300 rounded p-2" id="month"></input>
            </div>
            <div className="flex flex-col w-fit h-fit items-start justify-center">
              <h2 className="text-gray-400 font-bold text-xs pb-1 tracking-widest">YEAR</h2>
              <input type="number" min="2023" placeholder="YYYY" className="text-black font-bold w-20 border border-gray-300 rounded p-2" id="year"></input>
            </div>
          </section>
          <section className="w-full relative flex flex-col items-end mt-4">
            <a className="w-full h-px bg-gray-300 absolute mt-8 z-0"></a>
            <button className="bg-purple text-white text-lg flex items-center justify-center w-16 h-16 border border-purple font-bold italic rounded-full p-4 z-10 transition duration-200 hover:bg-white hover:border-gray-300 hover:text-black" onClick={setDate}>GO!</button>
          </section>
          <section className="flex flex-col w-full">
            <div className="flex flex-row gap-4">
              <a className="text-purple font-black text-2xl italic">{days}</a>
              <p className="text-black font-black text-2xl italic">days</p>
            </div>
            <div className="flex flex-row gap-4">
              <a className="text-purple font-black text-2xl italic">{months}</a>
              <p className="text-black font-black text-2xl italic">months</p>
            </div>
            <div className="flex flex-row gap-4">
              <a className="text-purple font-black text-2xl italic">{years}</a>
              <p className="text-black font-black text-2xl italic">years</p>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
