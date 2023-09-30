import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound({ state }) {
  const textColor = state === "dark" ? "text-white" : "text-black";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.67 }}
    >
      <div className={`flex flex-col items-center justify-center gap-4 mt-[30vh] sm:mt-[0vh]`}>
          <span className={`${textColor} font-bold text-md tracking-widest`}>PAGE NOT FOUND</span>
          <Link to="/" className={`${textColor} transition duration-300 font-bold italic text-lg hover:scale-105`}>GO BACK HOME</Link>
      </div>
    </motion.div>
  );
}

export default NotFound;
