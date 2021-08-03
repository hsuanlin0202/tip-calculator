import React from "react";
import clsx from "clsx";
import { TipResultTypes } from "../../types";

type AmountItemProps = {
  title: string;
  amount: number;
};
const AmountItem = ({ title, amount }: AmountItemProps) => {
  return (
    <div className="flex justify-between items-center mb-6 md:mb-10">
      <div className="flex flex-col">
        <span className="text-white font-bold">{title}</span>
        <span className="text-teal-dark">/ person</span>
      </div>
      <div className="text-teal-bright text-3xl md:text-5xl font-bold">
        {amount.toFixed(2)}
      </div>
    </div>
  );
};

type Props = {
  value: TipResultTypes;
  reset: () => void;
};
const Result = ({ value, reset }: Props): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-between rounded-2xl bg-teal-darkest p-6 md:p-10 relative mb-6 md:mb-0">
      <div>
        <AmountItem title="Tip Amount" amount={value.amount} />
        <AmountItem title="Total" amount={value.total} />
      </div>
      <button
        className={clsx(
          "bg-teal-bright text-teal-darkest rounded w-full h-12 mt-4 md:mt-0 text-xl font-bold",
          value.canReset ? "opacity-100" : "opacity-20"
        )}
        onClick={reset}
      >
        RESET
      </button>
      <div className="h-6 w-1 absolute top-full"></div>
    </div>
  );
};

export default Result;
