export default function AgeInput({textColor, titleValue, min, max, plaecholder, id}) {
  return (
    <div className="flex flex-col w-full 2sm:w-fit h-full items-start justify-center">
      <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>
        {titleValue}
      </h2>
      <input
        type="number"
        min={min}
        max={max}
        placeholder={plaecholder}
        className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full 2sm:w-20 border border-gray-300 rounded p-2`}
        id={id}
      ></input>
    </div>
  );
}
