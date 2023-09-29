export default function Popup({ title, cardBg, translation, textColor }) {
  return (
    <div
      className={`select-none absolute w-fit h-full top-0 pointer-events-none	transition duration-500 ease-out z-50 mt-6 ${translation}`}
    >
      <p
        className={`${cardBg} ${textColor} font-bold text-sm p-4 rounded-full`}
      >
        {title}
      </p>
    </div>
  );
}
