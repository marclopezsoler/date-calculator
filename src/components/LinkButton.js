export default function LinkButton({ textColor, textValue, translateText, fontSize }) {
  return (
    <p
      className={`${textColor} drop-shadow-sm hover:drop-shadow-md transition duration-700 font-bold italic ${fontSize} ${translateText}`}
    >
      {textValue}
    </p>
  );
}
