import React from "react";
import StarIcon from "@mui/icons-material/Star";



const ClientBox = ({clientInfo }) => {
  const {name, country, dec , img} = clientInfo
  return (
    <div className="clientBox bg-[#181a1f] xl:w-[530px] rounded-lg p-6 mb-11 ml-2 mr-2">
      <div className="flex mt-4">
        <div className="img">
          <img src={img} alt="Client" className="rounded-[50%]" />
        </div>

        <div className="ml-4 flex flex-col">
          <h1 className="text-xl mb-1">{name}</h1>
          <span className="opacity-50">{country}</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="opacity-95">
          <p className="mt-2">
{dec}
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
