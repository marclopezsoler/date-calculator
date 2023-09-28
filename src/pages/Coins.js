function Coins({ state }) {
  const cardBg = state === "dark" ? "bg-pureBlack" : "bg-white";

  return (
    <>
      <div
        className={`${cardBg} max-w-lg w-full h-fit px-12 py-12 gap-4 rounded-xl shadow-sm hover:shadow-md transition duration-500 flex flex-col items-start justify-center`}
      >
        <p>COINS</p>
      </div>
    </>
  );
}

export default Coins;
