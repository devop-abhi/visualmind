import { useState } from "react";

import ArrayBox from "./ArrayBox";
import ControlPanel from "./ControlPanel";
import StatusPanel from "./StatusPanel";

const array = [10, 20, 30, 40, 50, 60, 70];

const BinarySearchAnimation = () => {
  const [target, setTarget] = useState("");

  const [low, setLow] = useState(0);

  const [high, setHigh] = useState(array.length - 1);

  const [mid, setMid] = useState(
    Math.floor((array.length - 1) / 2)
  );

  const [foundIndex, setFoundIndex] = useState(-1);

  const [message, setMessage] = useState(
    "Enter a target and click Search."
  );

  const [step, setStep] = useState(1);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSearch = async () => {
    if (!target) {
      setMessage("Please enter a target.");
      return;
    }

    const value = Number(target);

    let l = 0;
    let h = array.length - 1;

    setFoundIndex(-1);
    setStep(1);

    while (l <= h) {
      const m = Math.floor((l + h) / 2);

      setLow(l);
      setHigh(h);
      setMid(m);

      setStep((prev) => prev + 1);

      await sleep(1000);

      if (array[m] === value) {
        setFoundIndex(m);

        setMessage(
          `🎉 ${value} Found at index ${m}!`
        );

        return;
      }

      if (value < array[m]) {
        setMessage(
          `${value} < ${array[m]} → Searching Left Half`
        );

        h = m - 1;
      } else {
        setMessage(
          `${value} > ${array[m]} → Searching Right Half`
        );

        l = m + 1;
      }

      await sleep(1000);
    }

    setMessage("❌ Target Not Found");
  };

  const handleReset = () => {
    setTarget("");

    setLow(0);

    setHigh(array.length - 1);

    setMid(
      Math.floor((array.length - 1) / 2)
    );

    setFoundIndex(-1);

    setStep(1);

    setMessage(
      "Enter a target and click Search."
    );
  };

  return (
    <div>
      <ControlPanel
        target={target}
        setTarget={setTarget}
        onSearch={handleSearch}
        onReset={handleReset}
      />

      <div className="flex justify-center gap-4 mt-12">
        {array.map((value, index) => (
          <ArrayBox
            key={index}
            value={value}
            isLow={index === low}
            isMid={index === mid}
            isHigh={index === high}
            isFound={index === foundIndex}
          />
        ))}
      </div>

      <StatusPanel
        low={low}
        mid={mid}
        high={high}
        message={message}
        step={step}
      />
    </div>
  );
};

export default BinarySearchAnimation;