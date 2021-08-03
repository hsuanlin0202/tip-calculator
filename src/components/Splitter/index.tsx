import React, { useEffect, useState } from "react";
import { initTipCounter } from "../../constant/initData";
import { TipCounterTypes, TipResultTypes } from "../../types";
import Controller from "../Controller";
import Result from "../Result";

const isModified = (value: TipCounterTypes): boolean => {
  if (value.bill !== 0) return true;
  if (value.numPpl !== 0) return true;
  if (value.tip !== 0) return true;
  return false;
};

const amountCal = (value: TipCounterTypes): number => {
  if (!value.bill) return 0;
  if (!value.tip) return 0;
  if (!value.numPpl) return 0;
  return (value.bill * value.tip) / 100 / value.numPpl;
};

const totalCal = (value: TipCounterTypes): number => {
  if (!value.bill) return 0;
  if (!value.tip) return 0;
  if (!value.numPpl) return 0;
  return value.bill / value.numPpl + amountCal(value);
};

const Splitter = (): JSX.Element => {
  const [tipCounter, setTipCounter] = useState<TipCounterTypes>(initTipCounter);

  const [tipResult, setTipResult] = useState<TipResultTypes>({
    canReset: false,
    amount: 0,
    total: 0,
  });

  useEffect(() => {
    setTipResult({
      canReset: isModified(tipCounter),
      amount: amountCal(tipCounter),
      total: totalCal(tipCounter),
    });
  }, [tipCounter]);

  const onChangeHandler = (value: string | number, section: string): void => {
    setTipCounter({ ...tipCounter, [section]: value });
  };

  const reset = (): void => {
    setTipCounter(initTipCounter);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-6 md:space-y-0">
      <Controller value={tipCounter} onChange={onChangeHandler} />

      <Result value={tipResult} reset={reset} />
    </div>
  );
};

export default Splitter;
