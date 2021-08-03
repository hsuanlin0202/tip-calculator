import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Input } from "../widgets";

const tipButtonList = [5, 10, 15, 25, 50];

type TipButtonProps = {
  num: number;
  isFocus: boolean;
  onClick: () => void;
};
const TipButton = ({ num, isFocus, onClick }: TipButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full h-12 hover:bg-teal-bright focus:bg-teal-bright text-white rounded font-bold text-2xl",
        isFocus ? "bg-teal-bright" : "bg-teal-darkest"
      )}
      onClick={onClick}
    >
      {`${num}%`}
    </button>
  );
};

type Props = {
  value: "" | number;
  onChange: (e: number) => void;
};
const SelectTip = ({ value, onChange }: Props): JSX.Element => {
  const [custom, setCustom] = useState<number>(0);

  const clickHandler = (e: number) => {
    setCustom(0);
    onChange(e);
  };

  const customHandler = (e: string) => {
    if (e === "") onChange(0);
    setCustom(parseFloat(e || "0"));
  };

  useEffect(() => {
    if (!value) setCustom(0);
  }, [value]);

  useEffect(() => {
    if (custom > 99) {
      setCustom(100);
      onChange(100);
      return;
    }
    if (custom !== 0) onChange(custom);
  }, [custom]);

  return (
    <div className="w-full">
      <p className="text-teal-darker font-bold mb-2">Select Tip %</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tipButtonList.map((item, index) => (
          <TipButton
            key={index}
            num={item}
            isFocus={value === item && value !== custom}
            onClick={() => clickHandler(item)}
          />
        ))}
        <Input
          id="customTip"
          value={custom}
          placeholder="Custom"
          onChange={(e) => customHandler(e)}
          placeholderDark
        />
      </div>
    </div>
  );
};

export default SelectTip;
