export default function Input({min, max, placeholder, textColor, id}){
   return(
      <input
        type="number"
        min={min}
        max={max}
        placeholder={placeholder}
        className={`${textColor} outline-none placeholder-gray-300 bg-transparent font-bold w-full 2sm:w-20 border border-gray-300 rounded p-2`}
        id={id}
      ></input>
   )
}