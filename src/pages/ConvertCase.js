import { motion } from "framer-motion";
import { useState } from "react";
import CharsBtn from "../components/CharsBtn";

function ConvertCase({ state }) {
   const [textContent, setTextContent] = useState("");

  const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";
  const textColor = state === "dark" ? "text-white" : "text-black";

   function handleTextChange(event){
      const textValue = event.target.value;
      setTextContent(textValue);
   }

  function setLowerCase(){
   const lowerCaseText = textContent.toLowerCase();;
   setTextContent(lowerCaseText);
  }

  function setUpperCase(){
   const upperCaseText = textContent.toUpperCase();
   setTextContent(upperCaseText);
  }

  function copyClipboard(){
   const copyText = textContent;

   const textArea = document.createElement("textarea");
   textArea.value = copyText;

   document.body.appendChild(textArea);

   textArea.select();
   document.execCommand("copy");

   document.body.removeChild(textArea);
  }

  function setClear(){
   setTextContent("");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.67 }}
    >
      <div
        className={`${cardBg} max-w-lg w-full h-fit px-12 py-12 gap-8 rounded-xl shadow-sm hover:shadow-md transition duration-500 flex flex-col items-start justify-center`}
      >
        <section className="flex flex-col w-full h-full items-start justify-center">
          <textarea
            placeholder={"Type or paste your content here"}
            className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full h-100 border border-gray-300 rounded p-2`}
            id="text"
            value={textContent}
            onChange={handleTextChange}
          ></textarea>
        </section>
          <div className="flex flex-row gap-4">
            <CharsBtn functionName={setLowerCase} name={"lower case"}/>
            <CharsBtn functionName={setUpperCase} name={"UPPER CASE"}/>
            <CharsBtn functionName={copyClipboard} name={"Copy"}/>
            <CharsBtn functionName={setClear} name={"Clear"}/>
          </div>
      </div>
    </motion.div>
  );
}

export default ConvertCase;
