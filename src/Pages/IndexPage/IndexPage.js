import React from "react";
import AbouMe from "../../Components/AboutMe/AbouMe";
import RightBar from "../../Components/RightBar/RightBar";
import LeftBar from "../../Components/LeftBar/LeftBar";

export default function IndexPage() {
  return <div className="grid grid-cols-12  ">
    <LeftBar/>
    <RightBar/>
    <AbouMe/>
    
  </div>;
}
