const ArrayBox = ({
  value,
  isLow,
  isMid,
  isHigh,
  isFound,
}) => {

  let color =
    "bg-white/10";

  if (isFound)
    color = "bg-green-500";

  else if (isMid)
    color = "bg-cyan-500";

  else if (isLow)
    color = "bg-yellow-500";

  else if (isHigh)
    color = "bg-red-500";

  return (
    <div
      className={`
        w-16
        h-16
        rounded-xl
        flex
        items-center
        justify-center
        font-bold
        text-lg
        transition-all
        duration-500
        ${color}
      `}
    >
      {value}
    </div>
  );
};

export default ArrayBox;