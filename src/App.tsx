import React from "react";
import clsx from "clsx";
import Splitter from "./components/Splitter";

const App = (): JSX.Element => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-teal-normal">
      <div className="w-24 h-14 mt-12 mb-10 md:mt-0 md:mb-20">
        <img src="/images/logo.svg" />
      </div>
      <div
        className={clsx(
          "w-full max-w-230 bg-white p-6 md:p-8 shadow-default",
          "flex-1 rounded-t-3xl overflow-y-scroll",
          "md:flex-none md:rounded-b-3xl md:h-120 md:overflow-hidden"
        )}
      >
        <Splitter />
      </div>
    </div>
  );
};

export default App;
