import { motion } from "framer-motion";
import { useState } from "react";
import CharsBtn from "../components/CharsBtn";

function ConvertCase({ state }) {
  const [textContent, setTextContent] = useState("");
  const [isCopied, setCopied] = useState(false);

  const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";
  const textColor = state === "dark" ? "text-white" : "text-black";
  const translation = isCopied ? "translate-y-0" : "-translate-y-full";

  function handleTextChange(event) {
    const textValue = event.target.value;
    setTextContent(textValue);
  }

  function setLowerCase() {
    const lowerCaseText = textContent.toLowerCase();
    setTextContent(lowerCaseText);
  }

  function setUpperCase() {
    const upperCaseText = textContent.toUpperCase();
    setTextContent(upperCaseText);
  }

  function setCapitalCase() {
    let capitalCase = textContent.toLowerCase();
    capitalCase = capitalCase.split(" ");
    for (let i = 0; i < capitalCase.length; i++) {
      capitalCase[i] =
        capitalCase[i].charAt(0).toUpperCase() + capitalCase[i].slice(1);
    }
    capitalCase = capitalCase.join(" ");
    setTextContent(capitalCase);
  }

  function setSentenceCase() {
    let sentenceCase = textContent.toLowerCase();

    sentenceCase = sentenceCase.charAt(0).toUpperCase() + sentenceCase.slice(1);

    setTextContent(sentenceCase);
  }

  function copyClipboard() {
    const copyText = textContent;

    const textArea = document.createElement("textarea");
    textArea.value = copyText;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  }

  function setClear() {
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
        className={`${cardBg} max-w-lg w-full h-fit px-12 py-12 gap-8 rounded-xl shadow-sm hover:shadow-md transition duration-500 flex flex-col items-center justify-center`}
      >
        <section className="flex flex-col w-full h-full items-start justify-center">
          <textarea
            placeholder={"Type or paste your content here"}
            className={`${textColor} resize-y outline-none placeholder-gray-300 bg-transparent font-bold w-full h-100 border border-gray-300 rounded p-2`}
            id="text"
            value={textContent}
            onChange={handleTextChange}
          ></textarea>
        </section>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CharsBtn functionName={setLowerCase} name={"lower case"} />
          <CharsBtn functionName={setUpperCase} name={"UPPER CASE"} />
          <CharsBtn functionName={setSentenceCase} name={"Sentence case"} />
          <CharsBtn functionName={setCapitalCase} name={"Capital Case"} />
          <CharsBtn functionName={copyClipboard} name={"Copy to Clipboard"} />
          <CharsBtn functionName={setClear} name={"Clear"} />
        </div>
        <div
          className={`select-none absolute w-fit h-full top-0 pointer-events-none	transition duration-500 ease-out z-50 mt-6 ${translation}`}
        >
          <p
            className={`${cardBg} ${textColor} font-bold text-md p-4 rounded-full`}
          >
            Text copied to clipboard
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ConvertCase;
