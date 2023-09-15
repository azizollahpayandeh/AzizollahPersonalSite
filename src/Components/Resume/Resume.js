import React from "react";
import MyEducation from "./../MyEducation/MyEducation";

export default function Resume({id}) {
  return (
    <div className="w-[100%] h-auto bg-[#212529!important]" id={id}>
      <div className="xl:ml-16 ">
              <div className="flex-col justify-center items-center text-center flex ">
        <h1 className="text-3xl font-bold xl:mt-28 mt-24">Resume</h1>
        <div className="w-[70px] bg-[#20c997] mt-2 h-[3px]" />
      </div>
      <div>
        <MyEducation />
      </div>
      </div>

    </div>
  );
}
