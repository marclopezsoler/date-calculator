import { useState } from "react";
import "./App.css";
import SwitchBg from "./components/SwitchBg";
import AgeCalculator from "./pages/AgeCalculator";
import Menu from "./components/Menu";

function App() {
  const [bgState, setBgState] = useState("light");

  function changeBg() {
    setBgState(bgState === "light" ? "dark" : "light");
  }


  const mainBg = bgState === 'dark' ? 'bg-black' : 'bg-gray-200';

  return (
    <div>
      <body className={`${mainBg} overflow-hidden w-screen h-screen flex flex-col relative items-center justify-center p-4 transition duration-300`}>
        <Menu state={bgState}/>
        <SwitchBg state={bgState} changeBg={changeBg}/>
        <AgeCalculator state={bgState}/>
      </body>
    </div>
  );
}

export default App;
