import React, { useState, useEffect } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialIcons = [
  { icon: <FacebookOutlinedIcon />, className: "p-[1px] cursor-pointer" },
  { icon: <TwitterIcon />, className: "p-[1px]  cursor-pointer" },
  { icon: <LanguageIcon />, className: "p-[1px]  cursor-pointer" },
  { icon: <GitHubIcon />, className: "p-[1px]  cursor-pointer" },
];

export default function LeftBar() {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { text: "Home", link: "#" },
    { text: "About me", link: "#" },
    { text: "What I Do", link: "#" },
    { text: "Resume", link: "#" },
    { text: "Profilo", link: "#" },
    { text: "Testimonial", link: "#" },
    { text: "Contact", link: "#" },
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
      <div className="fixed top-0 left-0 w-full bg-[#161616] text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 p-[2px]">
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
        <ul className="md:hidden">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>


    )
  }

  const name = "Azizollah Payandeh";
  const profileImageSrc = "./images/mee.jpg";

  return (
    <div className="left-bar fixed top-0 bottom-0 bg-[#161616] text-white w-[250px]">
      {" "}
      <div className="flex flex-col items-center mt-7">
        <img
          src={profileImageSrc}
          alt=""
          className="rounded-[50%] border-8 w-40 h-40 border-zinc-800"
        />
        <h1 className="text-lg font-semibold mt-3 opacity-90">{name}</h1>
      </div>
      <div className="list-none flex flex-col items-center gap-5 mt-[130px] font-medium opacity-90">
        <a href="#">
          <li className="text-green-500 hover:bg-green-500">Home</li>
        </a>
        <a href="#">
          <li className="hover:text-green-500">About me</li>
        </a>
        <a href="#">
          <li className="hover:text-green-500">What I Do</li>
        </a>
        <a href="#">
          <li className="hover:text-green-500">Resume</li>
        </a>
        <a href="#">
          <li className="hover:text-green-500">Profilo</li>
        </a>
        <a href="#">
          <li className="hover:text-green-500">Testimonial</li>
        </a>
        <a href="#">
          <li className="hover:text-green-500">Contact</li>
        </a>
      </div>
      <div className="flex justify-center items-end gap-3 opacity-50 mt-[220px] ">
        {socialIcons.map((item, index) => (
          <div key={index} className={item.className}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
