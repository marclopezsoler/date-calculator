import { useState } from "react";
import iconArrow from "../assets/icon-arrow.svg";
import AgeInput from "../components/AgeInput";
import AgeResult from "../components/AgeResult";

function AgeCalculator({state}) {
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");
  const [dayText, setDayText] = useState("days");
  const [monthText, setMonthText] = useState("months");
  const [yearText, setYearText] = useState("years");

  let today = new Date();
  let todayDay = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();

  function setDate(){
    let dayValue = parseInt(document.getElementById("day").value);
    let monthValue = parseInt(document.getElementById("month").value);
    let yearValue = parseInt(document.getElementById("year").value);

    if(!isNaN(dayValue) && !isNaN(monthValue) && !isNaN(yearValue)){

      let birth = new Date(yearValue, monthValue - 1, dayValue);

      let todayDate = new Date(todayYear, todayMonth - 1, todayDay);

      if(birth < todayDate){
        createDate();
      } else if (birth > todayDate){
      } else{
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

        if(dayValue == todayDay - 1){
          setDayText('day');
        } else{
          setDayText('days');
        }

        if(monthValue == todayMonth - 1){
          setMonthText('month');
        } else{
          setMonthText('months');
        }

        if(yearValue == todayYear - 1){
          setYearText('year');
        } else{
          setYearText('years');
        }
      }
    }
  }

  const cardBg = state === 'dark' ? 'bg-pureBlack' : 'bg-white';
  const h1Color = state === 'dark' ? 'text-white' : 'text-black';
  const textColor = state === 'dark' ? 'text-white' : 'text-gray-400';

  return (
    <>
        <div className={`${cardBg} max-w-lg w-full h-fit px-12 py-12 gap-4 rounded-xl shadow-sm hover:shadow-md transition duration-500 flex flex-col items-start justify-center`}>
          <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-3/4 items-center justify-center">
            <AgeInput textColor={textColor} titleValue={'DAY'} min={1} max={31} plaecholder={"DD"} id={'day'}/>
            <AgeInput textColor={textColor} titleValue={'MONTH'} min={1} max={12} plaecholder={"MM"} id={'month'}/>
            <AgeInput textColor={textColor} titleValue={'YEAR'} min={1} max={todayYear} plaecholder={"YYYY"} id={'year'}/>
          </section>
          <section className="w-full relative flex flex-col items-end mt-4">
            <a className="w-full h-px bg-gray-300 absolute mt-8 z-0"></a>
            <button className={`bg-purple text-white text-lg flex items-center justify-center w-16 h-16 border border-purple font-bold italic rounded-full p-4 z-10 transition duration-200 sm:hover:scale-110 sm:hover:rotate-45`} onClick={setDate}><img src={iconArrow}/></button>
          </section>
          <section className="flex flex-col w-full">
            <AgeResult h1Color={h1Color} result={days} titleText={dayText}/>
            <AgeResult h1Color={h1Color} result={months} titleText={monthText}/>
            <AgeResult h1Color={h1Color} result={years} titleText={yearText}/>
          </section>
        </div>
        </>
  );
}


export default AgeCalculator;
