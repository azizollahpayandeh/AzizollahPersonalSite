import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function Skils() {
  const progress = {
    first: "80",
    second: "50",
    third: "20",
    fourth: "50",
    fifth: "65",
    sixth: "75",
  };
  return (
    <div>
        <div>
                  <div className=" mt-11">
        <ProgressBar progress={progress.fourth} Title="React" />
      </div>

      <div className=" mt-11">
        <ProgressBar progress={progress.fifth} Title="React" />
      </div>

      <div className=" mt-11">
        <ProgressBar progress={progress.sixth} Title="React" />
      </div>
        </div>

    </div>
  );
}
