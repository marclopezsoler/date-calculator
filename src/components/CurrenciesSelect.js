export default function CurrenciesSelect({text, textColor}) {
  return (
    <div className="flex flex-col w-full">
      <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>{text}</h2>
      <select className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full border border-gray-300 rounded p-2`}>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  );
}
