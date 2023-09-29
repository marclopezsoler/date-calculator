import { useState } from "react";
import "./App.css";
import SwitchBg from "./components/SwitchBg";
import AgeCalculator from "./pages/AgeCalculator";
import Menu from "./components/Menu";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CurrencyChange from "./pages/CurrencyChange";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound";
import ConvertCase from "./pages/ConvertCase";

function App() {
  const [bgState, setBgState] = useState("light");

  function changeBg() {
    setBgState(bgState === "light" ? "dark" : "light");
  }

  const mainBg = bgState === "dark" ? "bg-almostBlack" : "bg-gray-200";

  return (
    <AnimatePresence>
      <Router>
        <div
          className={`${mainBg} overflow-x-hidden w-screen h-screen flex flex-col relative items-center justify-start 2sm:justify-center 2sm:p-4 transition duration-300`}
          >
        <Menu state={bgState} />
        <SwitchBg state={bgState} changeBg={changeBg} />
        <div
          className={`${mainBg} overflow-x-hidden w-screen h-screen flex flex-col relative items-center justify-center 2sm:justify-center transition duration-300`}
          >
            <Routes>
              <Route exact path="/" element={<Home state={bgState}/>}></Route>
              <Route exact path="/convert-case" element={<ConvertCase state={bgState}/>}></Route>
              <Route exact path="/age-calculator" element={<AgeCalculator state={bgState}/>}></Route>
              <Route exact path="/currency-change" element={<CurrencyChange state={bgState}/>}></Route>
              <Route path='*' element={<NotFound state={bgState}/>}/>
            </Routes>
        </div>
      </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
