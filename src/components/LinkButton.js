export default function LinkButton({ textColor, textValue, translateText, fontSize }) {
  return (
    <p
      className={`${textColor} drop-shadow-sm hover:drop-shadow-md transition duration-700 delay-200 font-bold italic ${fontSize} ${translateText}`}
    >
      {textValue}
    </p>
  );
}
