import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  id: string;
  error?: boolean;
  iconPath?: string;
  placeholder?: string;
  placeholderDark?: boolean;
  value: string | number;
  onChange: (e: string) => void;
};
export const Input = ({
  className,
  id,
  error,
  iconPath = "",
  placeholder = "",
  placeholderDark = false,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <div className="relative mb-4">
      <label className="hidden" htmlFor={id}>{`${id} Label`}</label>

      <input
        id={id}
        className={clsx(
          "w-full rounded pr-4 py-1 h-12 text-teal-darker bg-teal-lighter border-0 focus:outline-none",
          "font-bold text-2xl text-right",
          placeholderDark
            ? "placeholder-teal-darker"
            : "placeholder-teal-light",
          error
            ? "border-2 border-red-default focus:border-red-default text-red-default"
            : "focus:border-teal-bright focus:border-2 ",
          className
        )}
        type="number"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />

      {iconPath && (
        <div className="absolute h-4 w-4 top-0 left-0 m-4 overflow-hidden">
          <img src={iconPath} />
        </div>
      )}
    </div>
  );
};
