import React from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import AddchartIcon from "@mui/icons-material/Addchart";
import CampaignIcon from "@mui/icons-material/Campaign";

// Reusable component for a single service item
function ServiceItem({ icon, title, description }) {
  const iconStyle = {
    fontSize: "40px", // Adjust the size as needed
  };

  return (
    <div className="flex mt-10">
      <div className="flex w-[65px] h-[60px] bg-[#212529!important] text-[#20c997] mr-5 rounded-lg mt-2">
        {React.cloneElement(icon, { style: iconStyle })}
      </div>

      <div>
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="opacity-50 mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function WhatIDo({id}) {
  const servicesLeft = [
    {
      icon: <PersonalVideoIcon className="m-3 " />,
      title: "Web Design",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      icon: <DesignServicesIcon className="m-3" />,
      title: "UI/UX Design",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      icon: <AddchartIcon className="m-3" />,
      title: "Business Analysis",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const servicesRight = [
    {
      icon: <PaletteIcon className="m-3" />,
      title: "Graphic Design",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      icon: <BrushIcon className="m-3" />,
      title: "App Design & Develop",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      icon: <CampaignIcon className="m-3" />,
      title: "SEO Marketing",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  return (
    <div className="bg-[#343a40!important] w-[100%] h-auto" id={id}>
      <div className="flex-col justify-center items-center text-center flex">
        <h1 className="text-3xl font-bold xl:mt-28 mt-24">What I Do?</h1>
        <div className="w-[70px]  bg-[#20c997] mt-2 h-[3px]" />
      </div>

      <div className="xl:flex ml-3 xl:justify-evenly mt-8">
        <div className="xl:w-1/2 xl:ml-11">
          {servicesLeft.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>

        <div className="xl:w-1/2 xl:ml-11 mr-5">
          {servicesRight.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
