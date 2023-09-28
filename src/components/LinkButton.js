export default function LinkButton({ textColor, textValue, translateText }) {
  return (
    <a
      className={`${textColor} drop-shadow-sm hover:drop-shadow-md transition duration-700 delay-200 font-bold italic text-xl ${translateText}`}
    >
      {textValue}
    </a>
  );
}
