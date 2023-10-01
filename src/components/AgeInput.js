import Input from "./Input";

export default function AgeInput({textColor, titleValue, min, max, placeholder, id}) {
  return (
    <div className="flex flex-col w-full 2sm:w-fit h-full items-start justify-center">
      <h2 className={`${textColor} font-bold text-xs pb-1 tracking-widest`}>
        {titleValue}
      </h2>
      <Input min={min} max={max} placeholder={placeholder} textColor={textColor} id={id} />
    </div>
  );
}
