import React from "react";
import { Input } from "../widgets";
import { ReactComponent as Dollar } from "../../../images/icon-dollar.svg";

type Props = {
  value: number;
  onChange: (e: string) => void;
};

const Bill = ({ value, onChange }: Props): JSX.Element => {
  return (
    <div className="w-full">
      <p className="text-teal-darker font-bold mb-2">Bill</p>

      <Input
        id="bill"
        icon={<Dollar />}
        placeholder="0"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Bill;
