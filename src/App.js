import { useState } from "react";
import "./App.css";
import SwitchBg from "./components/SwitchBg";
import AgeCalculator from "./pages/AgeCalculator";
import Menu from "./components/Menu";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Coins from "./pages/Coins";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

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
          className={`${mainBg} overflow-hidden w-screen h-screen flex flex-col relative items-center justify-center p-4 transition duration-300`}
          >
          <Menu state={bgState} />
          <SwitchBg state={bgState} changeBg={changeBg} />
            <Routes>
              <Route exact path="/" element={<Home state={bgState}/>}></Route>
              <Route exact path="/age-calculator" element={<AgeCalculator state={bgState}/>}></Route>
              <Route exact path="/coins" element={<Coins state={bgState}/>}></Route>
            </Routes>
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
