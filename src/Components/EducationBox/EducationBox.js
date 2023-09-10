import React from "react";

export default function EducationBox({ year, certificate, university, dec }) {
  return (
    <div className="EdBox bg-[#111418!important] xl:w-[500px] w-[400px] rounded-lg h-[200px] mt-4">
      <div className="ml-5 flex flex-col gap-2">
        <span className="bg-[#20c997!important] w-[100px] h-5 flex justify-center items-center mt-5 rounded-md text-xs">
          {year}
        </span>
        <h1 className="text-[24px] font-medium">{certificate}</h1>
        <span className="text-[#20c997]">{university}</span>
        <p className="opacity-50 mr-4">{dec}</p>
      </div>
    </div>
  );
}
