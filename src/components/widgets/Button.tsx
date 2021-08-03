import React, { ReactNode } from "react";
import clsx from "clsx";
type Props = {
  className?: string;
  type: "button" | "submit";
  value?: string;
  onChange?: () => void;
  children?: ReactNode;
};
export const Button = ({
  className,
  type,
  value,
  onChange,
  children,
}: Props): JSX.Element => {
  if (type === "submit")
    return (
      <input
        className={clsx("w-full py-4 text-white tracking-wide", className)}
        type={type}
        value={value}
      />
    );

  return (
    <button
      className={clsx(
        "w-full rounded py-4 text-white tracking-wide",
        className
      )}
      onChange={onChange}
    >
      {children}
    </button>
  );
};
