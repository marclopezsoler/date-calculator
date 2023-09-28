import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";

export default function HomeLinks({link, width, cardBg, icon, textColor, textValue}){
   return(
      <Link to={link} className={`gap-2 rounded-xl flex flex-col md:flex-row items-center justify-center p-4 ${cardBg} transition duration-200 sm:hover:scale-105 text-center`}>
        <img src={icon} className={`w-${width}`} />
        <LinkButton textColor={textColor} fontSize={'lg'} textValue={textValue}/>
      </Link>
   )
}