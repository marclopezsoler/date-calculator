import { useEffect, useState } from "react";
import "./App.css";
import iconArrow from "./assets/icon-arrow.svg";
import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";

function App() {
  const [state, setState] = useState('dark');
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");
  const [dayText, setDayText] = useState("days");
  const [monthText, setMonthText] = useState("months");
  const [yearText, setYearText] = useState("years");

  function changeBg(){
    if(state == 'dark'){
      setState('light');
    } else{
      setState('dark');
    }
  }

  function setDate(){
    let dayValue = parseInt(document.getElementById("day").value);
    let monthValue = parseInt(document.getElementById("month").value);
    let yearValue = parseInt(document.getElementById("year").value);

    if(!isNaN(dayValue) && !isNaN(monthValue) && !isNaN(yearValue)){

      let birth = new Date(yearValue, monthValue - 1, dayValue);
      
      let today = new Date();
      let todayDay = today.getDate();
      let todayMonth = today.getMonth() + 1;
      let todayYear = today.getFullYear();

      let todayDate = new Date(todayYear, todayMonth - 1, todayDay);

      if(birth < todayDate){
        console.log('born');
        createDate();
      } else if (birth > todayDate){
        console.log('not born');
      } else{
        console.log('birthday');
        createDate();
      }
      
      if(dayValue == "" && dayValue <= 31){
        dayValue = todayDay;
      }
      if(monthValue == "" && monthValue <= 12){
        monthValue = todayMonth;
      }
      if(yearValue == ""){
        yearValue = todayYear;
      }

      function createDate(){
        setDays(todayDay - dayValue);
        setMonths(todayMonth - monthValue);
        setYears(todayYear - yearValue);

        console.log(days);
      }
    }
  }


  const swicthColor = state === 'dark' ? 'text-black' : 'text-white';
  const swicthBg = state === 'dark' ? 'bg-white' : 'bg-pureBlack';
  const mainBg = state === 'dark' ? 'bg-black' : 'bg-gray-200';
  const cardBg = state === 'dark' ? 'bg-pureBlack' : 'bg-white';
  const h1Color = state === 'dark' ? 'text-white' : 'text-black';
  const textColor = state === 'dark' ? 'text-white' : 'text-gray-400';
  const icon = state === 'dark' ? sun : moon;

  return (
    <div>
      <header>
      </header>
      <body className={`${mainBg} w-screen h-screen flex relative items-center justify-center p-4 transition duration-300`}>
        <button onClick={changeBg} className={`${swicthBg} ${swicthColor} absolute p-2 w-10 h-10 rounded-full top-0 mt-6 transition duration-500 hover:scale-110`}><img className="transition duration-500" src={icon}/></button>
        <div className={`${cardBg} max-w-lg w-full h-fit px-12 py-12 gap-4 rounded-xl shadow-md hover:shadow-2xl transition duration-500 flex flex-col items-start justify-center`}>
          <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-3/4 items-center justify-center">
            <div className="flex flex-col w-full sm:w-fit h-fit items-start justify-center">
              <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>DAY</h2>
              <input type="number" min="1" max="31" placeholder="DD" className={`${textColor} placeholder-gray-300 bg-transparent font-bold w-full sm:w-20 border border-gray-300 rounded p-2`} id="day"></input>
            </div>
            <div className="flex flex-col w-full sm:w-fit h-fit items-start justify-center">
              <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>MONTH</h2>
              <input type="number" min="1" max="12" placeholder="MM" className={`${textColor} placeholder-gray-300 bg-transparent font-bold w-full sm:w-20 border border-gray-300 rounded p-2`} id="month"></input>
            </div>
            <div className="flex flex-col w-full sm:w-fit h-fit items-start justify-center">
              <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>YEAR</h2>
              <input type="number" min="0" max="2023" placeholder="YYYY" className={`${textColor} placeholder-gray-300 bg-transparent font-bold w-full sm:w-20 border border-gray-300 rounded p-2`} id="year"></input>
            </div>
          </section>
          <section className="w-full relative flex flex-col items-end mt-4">
            <a className="w-full h-px bg-gray-300 absolute mt-8 z-0"></a>
            <button className={`bg-purple text-white text-lg flex items-center justify-center w-16 h-16 border border-purple font-bold italic rounded-full p-4 z-10 transition duration-200 sm:hover:scale-110 sm:hover:rotate-45`} onClick={setDate}><img src={iconArrow}/></button>
          </section>
          <section className="flex flex-col w-full">
            <div className="flex flex-row gap-4 sm:text-2xl text-xl">
              <a className="text-purple font-black italic">{days}</a>
              <p className={`${h1Color} font-black italic transition duration-200`}>{dayText}</p>
            </div>
            <div className="flex flex-row gap-4 sm:text-2xl text-xl">
              <a className="text-purple font-black italic">{months}</a>
              <p className={`${h1Color} font-black italic transition duration-200`}>{monthText}</p>
            </div>
            <div className="flex flex-row gap-4 sm:text-2xl text-xl">
              <a className="text-purple font-black italic">{years}</a>
              <p className={`${h1Color} font-black italic transition duration-200`}>{yearText}</p>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
