export default function AgeResult({result, h1Color, titleText}) {
  return (
    <div className="flex flex-row gap-4 sm:text-2xl text-xl">
      <a className="text-purple font-black italic">{result}</a>
      <p className={`${h1Color} font-black italic transition duration-200`}>
        {titleText}
      </p>
    </div>
  );
}
