import React from "react";
import clsx from "clsx";
import { ReactComponent as Logo } from "../images/logo.svg";
import Splitter from "./components/Splitter";

const App = (): JSX.Element => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-teal-normal">
      <div className="w-24 h-14 mt-12 mb-10 md:mt-0 md:mb-20">
        <Logo />
      </div>
      <div
        className={clsx(
          "w-full max-w-230 bg-white shadow-default",
          "p-6 flex-1 rounded-t-3xl overflow-y-scroll overscroll-y-contain",
          "md:p-8 md:flex-none md:rounded-b-3xl md:h-120 md:overflow-hidden"
        )}
      >
        <Splitter />
      </div>
    </div>
  );
};

export default App;
