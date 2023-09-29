import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

export default function SwitchBg({state, changeBg}) {
  const switchBg = state === "dark" ? "bg-pureBlack" : "bg-white";
  const icon = state === 'dark' ? sun : moon;

  return (
    <button
      onClick={changeBg}
      className={`${switchBg} z-30 absolute drop-shadow-2xl p-2 w-10 h-10 rounded-full bottom-4 transition duration-500 sm:hover:scale-110`}
    >
      <img className="transition duration-500" src={icon} alt="Toggle Background" />
    </button>
  );
}
