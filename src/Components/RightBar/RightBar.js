import React from "react";
import WhatIDo from "../WhatIDo/WhatIDo";
import AbouMe from "../../Components/AboutMe/AbouMe";
import Resume from "../Resume/Resume";
import Client from "../Client/Client";
import Concat from "../Concat/Concat";
import EndText from "../EndText/EndText";
import Typewriter from "typewriter-effect";

export default function RightBar() {
  const scrollToSection = () => {
    const sectionElement = document.getElementById('concat'); // تعویض 'concatComponent' با شناسه واقعی کامپوننت Concat
    if (sectionElement) {
      const yOffset = sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="xl:w-[83%] w-[100%] float-right">
      <div
        className="right-bar  overflow-auto bg-fixed bg-cover bg-no-repeat bg-center col-span-10 md:col-span-2 h-[100vh]  "
        style={{ backgroundImage: `url(./images/introC.jpg)` }}
      >
        <div className="flex flex-col justify-center items-center text-white gap-4 2xl:mt-[320px] mt-64  text-center  ">
          <h1 className="text-3xl font-medium md:text-4xl ">Welcome</h1>
          <h1 className="text-5xl md:text-7xl font-semibold">
            <Typewriter
              onInit={(typeWriter) => {
                typeWriter
                  .typeString("I'm Azizollah Payandeh.")
                  .start()
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("I'm a Front-End Developer.")
                  .start()
                  .pauseFor(2000)
                  .deleteAll();
              }}
              options={{
                loop: true,
              }}
            />
          </h1>

          <p className="text-[20px] opacity-80">based in Iran, Mashhad</p>

          <button
            className="border hover:bg-green-500 hover:text-white transition-all border-green-500 p-3 font-medium mt-2 w-36 rounded-3xl text-green-500"
            onClick={scrollToSection}
          >
            Hire Me
          </button>
        </div>
      </div>
      <AbouMe id="about"/>
      <WhatIDo id="whatido"/>
      <Resume id="resume"/>
      <Client id="testimonial"/>
      <Concat id="concat" /> {/* اضافه کردن شناسه به کامپوننت Concat */}
      <EndText/>
    </div>
  );
}
