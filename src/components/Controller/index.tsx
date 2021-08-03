import React, { useEffect, useState } from "react";
import { initTipCounter } from "../../constant/initData";
import { TipCounterTypes } from "../../types";
import Bill from "./Bill";
import NumPpl from "./NumPpl";
import SelectTip from "./SelectTip";

type Props = {
  value: TipCounterTypes;
  onChange: (value: string | number, section: string) => void;
};

const isErrorShow = (value: TipCounterTypes) => {
  if (value === initTipCounter) return false;
  if (value.numPpl !== 0) return false;
  return true;
};

const Controller = ({ value, onChange }: Props): JSX.Element => {
  const [isError, setError] = useState(false);

  useEffect(() => {
    setError(isErrorShow(value));
  }, [value]);
  return (
    <div className="w-full h-full flex flex-col justify-start md:justify-between space-y-4 md:space-y-0">
      <Bill
        value={value.bill}
        onChange={(e: string) => onChange(parseFloat(e), "bill")}
      />

      <SelectTip
        value={value.tip || ""}
        onChange={(e: number) => onChange(e, "tip")}
      />

      <NumPpl
        value={value.numPpl || ""}
        onChange={(e: string) => onChange(parseFloat(e || "0"), "numPpl")}
        isError={isError}
      />
    </div>
  );
};

export default Controller;
