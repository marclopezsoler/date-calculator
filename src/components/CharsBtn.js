export default function CharsBtn({functionName, name}){
   return(
      <button onClick={() => functionName()} className={`transition duration-200 md:hover:scale-105 bg-purple text-white font-bold text-sm px-4 py-2 rounded-full text-white`}>{name}</button>
   )
}