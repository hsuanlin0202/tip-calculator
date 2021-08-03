import React from "react";
import { Input } from "../widgets";

type Props = {
  value: "" | number;
  onChange: (e: string) => void;
  isError: boolean;
};
const NumPpl = ({ value, onChange, isError }: Props): JSX.Element => {
  return (
    <div className="w-full">
      <p className="flex justify-between text-teal-darker font-bold mb-2">
        <span>Number of People</span>
        {isError && <span className="text-red-default">Can’t be zero</span>}
      </p>

      <Input
        id="ppl"
        iconPath="/images/icon-person.svg"
        placeholder="0"
        value={value}
        onChange={onChange}
        error={isError}
      />
    </div>
  );
};

export default NumPpl;
