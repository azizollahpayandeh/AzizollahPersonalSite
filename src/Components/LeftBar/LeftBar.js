import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function LeftBar() {
  return (
    
    <div className="left grid col-span-2 bg-[#161616] text-white h-[100vh]">
    <div className="flex flex-col items-center mt-7">
      <img
        src="./images/mee.jpg"
        alt=""
        className="rounded-[50%] border-8 w-40 h-40 border-zinc-800"
      />
      <h1 className="text-lg font-semibold mt-2 opacity-90">
        Azizollah Payandeh
      </h1>
    </div>

    <div className="list-none flex flex-col items-center gap-3 mt-5 font-medium opacity-90 ">
      <a href="#">
        <li className="text-green-500">Home</li>
      </a>

      <a href="#">
        <li>About me</li>
      </a>

      <a href="#">
        <li>What I Do</li>
      </a>

      <a href="#">
        <li>Resume</li>
      </a>

      <a href="#">
        <li>Profilo</li>
      </a>

      <a href="#">
        <li>Testimonial</li>
      </a>

      <a href="#">
        <li>Contact</li>
      </a>
    </div>

    <div className="flex justify-center items-end gap-3 opacity-50 mb-1">
      <FacebookOutlinedIcon className="p-1 cursor-pointer" />
      <TwitterIcon className="p-1 cursor-pointer" />
      <LanguageIcon className="p-1 cursor-pointer" />
      <GitHubIcon className="p-1 cursor-pointer" />
    </div>
  </div>
  )
}
