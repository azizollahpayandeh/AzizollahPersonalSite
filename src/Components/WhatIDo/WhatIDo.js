import React from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import AddchartIcon from "@mui/icons-material/Addchart";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function WhatIDo() {
  return (
    <div className="bg-[#343a40!important] w-[100%] h-[115vh] xl:h-[85vh]">
      <div className="flex-col justify-center items-center text-center flex ">
        <h1 className="text-3xl font-bold xl:mt-28 mt-24">What I Do?</h1>
        <div className="w-[70px]  bg-[#20c997] mt-2 h-[3px]" />
      </div>

      <div className="xl:flex ml-3 xl:justify-evenly mt-8">
        <div>
          <div className="flex mt-10">
            <div className=" flex w-[65px] h-[60px] bg-[#212529!important] text-[#20c997] mr-5 rounded-lg mt-2">
              <PaletteIcon className="m-5" />
            </div>

            <div>
              <h1 className="text-xl font-medium">Graphic Design</h1>
              <p className="opacity-50 mt-1">
                Lisque persius interesset his et, in quot quidam
                <br />
                persequeris vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>

          <div className="flex mt-10">
            <div className=" flex w-[65px] h-[60px] bg-[#212529!important] text-[#20c997] mr-5 rounded-lg mt-2">
              <DesignServicesIcon className="m-5" />
            </div>

            <div>
              <h1 className="text-xl font-medium">UI/UX Design</h1>
              <p className="opacity-50 mt-1">
                Lisque persius interesset his et, in quot quidam
                <br />
                persequeris vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>

          <div className="flex mt-10">
            <div className=" flex w-[65px] h-[60px] bg-[#212529!important] text-[#20c997] mr-5 rounded-lg mt-2">
              <AddchartIcon className="m-5" />
            </div>

            <div>
              <h1 className="text-xl font-medium">Business Analysis</h1>
              <p className="opacity-50 mt-1">
                Lisque persius interesset his et, in quot quidam
                <br />
                persequeris vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:ml-12">
          <div className="flex mt-10">
            <div className=" flex w-[65px] h-[60px] bg-[#212529!important] text-[#20c997] mr-5 rounded-lg mt-2">
              <PersonalVideoIcon className="m-5" />
            </div>

            <div>
              <h1 className="text-xl font-medium">Web Design</h1>
              <p className="opacity-50 mt-1">
                Lisque persius interesset his et, in quot quidam
                <br />
                persequeris vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>

          <div className="flex mt-10">
            <div className=" flex w-[65px] h-[60px] bg-[#212529!important] text-[#20c997] mr-5 rounded-lg mt-2">
              <BrushIcon className="m-5" />
            </div>

            <div>
              <h1 className="text-xl font-medium">App Design & Develop</h1>
              <p className="opacity-50 mt-1">
                Lisque persius interesset his et, in quot quidam
                <br />
                persequeris vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>

          <div className="flex mt-10">
            <div className=" flex w-[65px] h-[60px] bg-[#212529!important] text-[#20c997] mr-5 rounded-lg mt-2">
              <CampaignIcon className="m-5" />
            </div>

            <div>
              <h1 className="text-xl font-medium">SEO Marketing</h1>
              <p className="opacity-50 mt-1">
                Lisque persius interesset his et, in quot quidam
                <br />
                persequeris vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
