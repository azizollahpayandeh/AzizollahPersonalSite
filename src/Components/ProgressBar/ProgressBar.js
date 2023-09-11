import React from "react";

const ProgressBar = ({ progress, Title }) => {
  return (
    <div className="relative pt-1 xl:w-[500px]">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className=" font-semibold opacity-80">
            {Title}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-[#20c997]">
            {progress}%
          </span>
        </div>
      </div>
      <div className="relative w-full bg-gray-200 rounded-full">
        <div
          className="absolute top-0 h-2 bg-black  rounded-r-full"
          style={{ width: `${100 - progress}%`, right: 0 }}
        ></div>
        <div
          className="absolute top-0 h-2 bg-[#20c997] rounded-l-full"
          style={{ width: `${progress}%`, left: 0 }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
