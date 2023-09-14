import React, { useState, useEffect } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";

const name = "Azizollah Payandeh";

const socialIcons = [
  {
    icon: <FacebookOutlinedIcon fontSize="small"/>,
    className: "p-[1px] cursor-pointer hover:text-blue-400",
  },
  { icon: <TwitterIcon fontSize="small" />, className: " cursor-pointer hover:text-blue-400" },
  { icon: <LanguageIcon fontSize="small" />, className: " cursor-pointer hover:text-red-400" },
  { icon: <GitHubIcon fontSize="small" />, className: " cursor-pointer hover:text-gray-600" },
];

export default function LeftBar() {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    {
      text: "Home",
      link: "#",
      className: "text-[#20c997] font-medium  text-xl ",
    },
    {
      text: "About me",
      link: "#",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "What I Do",
      link: "#",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "Resume",
      link: "#",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "Profilo",
      link: "#",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "Testimonial",
      link: "#",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "Contact",
      link: "#",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowLeftBar(false);
      } else {
        setShowLeftBar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showLeftBar) {
    return (
      <div className="fixed  top-0 left-0 w-full bg-[#121212]  text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="font-medium  text-2xl">{name}</h1>
          <div className="flex gap-2  -mr-17">
            {socialIcons.map((item, index) => (
              <div key={index} className={item.className}>
                {item.icon}
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden block text-white focus:outline-none"
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {showMenu && (
          <ul className="md:hidden mt-7">
            {menuItems.map((item, index) => (
              <li key={index} className="mt-2">
                <a href={item.link} className={item.className}>
                  {item.text}
                </a>
                <hr className="opacity-50 " />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const profileImageSrc = "./images/mee.jpg";

  return (
    <div className="left-bar fixed top-0 bottom-0 bg-[#161616] text-white xl:w-[17%] w-[0%] float-left ">
      {" "}
      <div className="flex flex-col items-center mt-7">
        <img
          src={profileImageSrc}
          alt=""
          className="rounded-[50%] border-8 w-40 h-40 border-zinc-800"
        />
        <h1 className="text-lg  mt-3 opacity-90">{name}</h1>
      </div>
      <d iv className="list-none flex  flex-col items-center gap-5 mt-[100px] font-medium opacity-90">
        <a href="#">
          <li className="text-[#20c997] hover:text-[#20c997!important] ">
            Home
          </li>
        </a>
        <a href="#">
          <li className="hover:text-[#20c997] ">About me</li>
        </a>
        <a href="#">
          <li className="hover:text-[#20c997] ">What I Do</li>
        </a>
        <a href="#">
          <li className="hover:text-[#20c997] ">Resume</li>
        </a>
        <a href="#">
          <li className="hover:text-[#20c997] ">Profilo</li>
        </a>
        <a href="#">
          <li className="hover:text-[#20c997] ">Testimonial</li>
        </a>
        <a href="#">
          <li className="hover:text-[#20c997] ">Contact</li>
        </a>
      </d>
      <div className="flex justify-center items-end gap-3 opacity-50 xl:mt-[60px]  2xl:mt-[255px] ">
        {socialIcons.map((item, index) => (
          <div key={index} className={item.className}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
