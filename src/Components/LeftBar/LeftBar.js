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
    icon: <FacebookOutlinedIcon fontSize="small" />,
    className: "p-[1px] cursor-pointer hover:text-blue-400",
    ahref:"https://www.facebook.com/profile.php?id=100088842394121"
  },
  {
    icon: <TwitterIcon fontSize="small" />,
    className: " cursor-pointer hover:text-blue-400",
    ahref:"sabzlearn.ir"

  },
  {
    icon: <LanguageIcon fontSize="small" />,
    className: " cursor-pointer hover:text-red-400",
    ahref:"sabzlearn.ir"

  },
  {
    icon: <GitHubIcon fontSize="small" />,
    className: " cursor-pointer hover:text-gray-600",
    ahref:"https://github.com/azizollahpayandeh"

  },
];

export default function LeftBar() {

  const [activeSection, setActiveSection] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(null);


  useEffect(() => {
    const handleScroll = () => {

      const aboutSection = document.getElementById("about");
      const whatIDoSection = document.getElementById("whatido");
      const resumeSection = document.getElementById("resume");
      const testimonialSection = document.getElementById("testimonial");
      const concatSection = document.getElementById("concat");
  
      const yOffset = window.scrollY;
  
      if (
        yOffset >= aboutSection.offsetTop &&
        yOffset < whatIDoSection.offsetTop
      ) {
        setActiveSection("about");
      } else if (
        yOffset >= whatIDoSection.offsetTop &&
        yOffset < resumeSection.offsetTop
      ) {
        setActiveSection("whatido");
      } else if (
        yOffset >= resumeSection.offsetTop &&
        yOffset < testimonialSection.offsetTop
      ) {
        setActiveSection("resume");
      } else if (
        yOffset >= testimonialSection.offsetTop &&
        yOffset < concatSection.offsetTop
      ) {
        setActiveSection("testimonial");
      } else if (yOffset >= concatSection.offsetTop) {
        setActiveSection("concat");
      } else {
        setActiveSection(null);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  

  const scrollToAbout = () => {
    const sectionElement = document.getElementById("about");
    if (sectionElement) {
      const yOffset =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setActiveMenuItem("about");
  };

  const scrollToWhatIDo = () => {
    const sectionElement = document.getElementById("whatido");
    if (sectionElement) {
      const yOffset =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setActiveMenuItem("whatido");
  };

  const scrollToResume = () => {
    const sectionElement = document.getElementById("resume");
    if (sectionElement) {
      const yOffset =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setActiveMenuItem("resume");
  };

  const scrollToTestimonial = () => {
    const sectionElement = document.getElementById("testimonial");
    if (sectionElement) {
      const yOffset =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setActiveMenuItem("testimonial");
  };

  const scrollToConcat = () => {
    const sectionElement = document.getElementById("concat");
    if (sectionElement) {
      const yOffset =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setActiveMenuItem("concat");
  };
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
      link: "#about",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "What I Do",
      link: "#whatido",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "Resume",
      link: "#resume",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "Testimonial",
      link: "#testimonial",
      className: "hover:text-[#20c997] font-medium text-xl ",
    },
    {
      text: "Contact",
      link: "#concat",
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
          <h1 className="font-medium text-2xl ">{name}</h1>
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
      <div className="list-none flex  flex-col items-center gap-6 mt-[100px] font-medium opacity-90">
        <a href="#">
          <li
             className={`${
              activeMenuItem === "Home" ? "text-[#20c997]" : "hover:text-[#20c997]"
            } ${activeSection === "Home" ? "text-[#20c997]" : ""}`}
            onClick={() => setActiveMenuItem("Home")}
          >
            Home
          </li>
        </a>
        <a href="#about">
          <li
              className={`${
                activeMenuItem === "about" ? "text-[#20c997]" : "hover:text-[#20c997]"
              } ${activeSection === "about" ? "text-[#20c997]" : ""}`}
            onClick={scrollToAbout}
          >
            About me
          </li>
        </a>
        <a href="#whatido">
          <li
           className={`${
            activeMenuItem === "whatido" ? "text-[#20c997]" : "hover:text-[#20c997]"
          } ${activeSection === "whatido" ? "text-[#20c997]" : ""}`}
            onClick={scrollToWhatIDo}
          >
            What I Do
          </li>
        </a>
        <a href="#resume">
          <li
            className={`${
              activeMenuItem === "resume" ? "text-[#20c997]" : "hover:text-[#20c997]"
            } ${activeSection === "resume" ? "text-[#20c997]" : ""}`}
            onClick={scrollToResume}
          >
            Resume
          </li>
        </a>
        <a href="#testimonial">
          <li
            className={`${
              activeMenuItem === "testimonial" ? "text-[#20c997]" : "hover:text-[#20c997]"
            } ${activeSection === "testimonial" ? "text-[#20c997]" : ""}`}
            onClick={scrollToTestimonial}
          >
            Testimonial
          </li>
        </a>
        <a href="#concat">
          <li
      className={`${
        activeMenuItem === "concat" ? "text-[#20c997]" : "hover:text-[#20c997]"
      } ${activeSection === "concat" ? "text-[#20c997]" : ""}`}
            onClick={scrollToConcat}
          >
            Contact
          </li>
        </a>
      </div>
      <div className="flex justify-center items-end gap-4 opacity-50 xl:mt-[150px] ">
        {socialIcons.map((item, index) => (
          <div key={index} className={item.className} href={item.ahref}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
