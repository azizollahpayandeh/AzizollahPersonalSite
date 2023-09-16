import React from "react";
import StarIcon from "@mui/icons-material/Star";

const clientImage = "./images/client-sm-1.jpg";

const ClientBox = () => {
  return (
    <div className="clientBox bg-[#181a1f] xl:w-[530px] rounded-lg p-6 mb-11">
      <div className="flex mt-4">
        <div className="img">
          <img src={clientImage} alt="Client" className="rounded-[50%]" />
        </div>

        <div className="ml-4 flex flex-col">
          <h1 className="text-xl mb-1">Dennis Jacques</h1>
          <span className="opacity-50">User from USA</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="opacity-95">
          <p className="mt-2">
            "Only trying it out since a few days. But up to now excellent.
            Seems to work flawlessly. priced simply dummy text of the printing
            and typesetting industry."
          </p>
        </div>
        <div className="mt-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <StarIcon key={index} className="text-yellow-600" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientBox;
