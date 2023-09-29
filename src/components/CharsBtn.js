export default function CharsBtn({functionName, name}){
   return(
      <button onClick={() => functionName()} className={`w-full 2sm:w-2/5 transition duration-200 md:hover:scale-105 bg-purple text-white font-bold text-sm px-4 py-2 rounded-full text-white sm:hover:scale-105 drop-shadow-sm hover:drop-shadow-md`}>{name}</button>
   )
}