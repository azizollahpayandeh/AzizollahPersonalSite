import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Contact({ id }) {
  return (
    <div className="bg-[#212529!important] xl:h-[95vh]" id={id}>
      <div className="flex-col justify-center items-center text-center flex">
        <h1 className="text-3xl font-bold xl:mt-28 mt-24">Get in Touch</h1>
        <div className="w-[70px] bg-[#20c997] mt-2 h-[3px]" />
      </div>

      <div className="container grid xl:grid-cols-12 mt-20">
        <div className="left xl:col-span-3 xl:ml-5 xl:flex xl:flex-col xl:text-left text-center">
          <h1 className="text-xl font-medium">ADDRESS</h1>
          <div className="flex flex-col opacity-80 mt-3">
            <span>2th Floor, tag 48, Abdi 16</span>
            <span>Tus, Boulevard</span>
            <span>Iran, Mashhad</span>
          </div>

          <div className="mt-9">
            <div className="mt-1 opacity-80">
              <LocalPhoneIcon className="text-[#20c997] mr-2" />
              <span>(+98) 05 6113 913</span>
            </div>

            <div className="mt-1 opacity-80">
              <FaxIcon className="text-[#20c997] mr-2" />
              <span>(053) 000 000 000</span>
            </div>

            <div className="mt-1 opacity-80">
              <EmailIcon className="text-[#20c997] mr-2" />
              <span className=" opacity-90 hover:text-[#20c997]">
                <a href="https://azizollahpayandeh1@gmail.com">
                  azizollahpayandeh1@gmail.com
                </a>
              </span>
            </div>

            <div className="mt-6 mb-14">
              <h1 className="text-xl font-medium">FOLLOW ME</h1>
              <div className="mt-4 opacity-70 gap-4 flex justify-center xl:justify-start ml-1">
                <a href="https://www.facebook.com/Azizollah%20Payandeh">
                  {" "}
                  <FacebookOutlinedIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-blue-400 opacity-80"
                  />
                </a>
                <a href="https://www.linkedin.com/in/azizollah-payandeh-70139b262/">
                  {" "}
                  <LinkedInIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-blue-400 opacity-80"
                  />
                </a>
                <a href="https://www.instagram.com/ars.alanpa">
                  {" "}
                  <InstagramIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-red-400 opacity-80"
                  />
                </a>
                <a href="https://github.com/azizollahpayandeh">
                  {" "}
                  <GitHubIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-gray-400 opacity-80"
                  />
                </a>
                <a href="https://t.me/azizollah010101">
                  {" "}
                  <TelegramIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-red-400 opacity-80"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* سمت راست */}
        <div className="right xl:col-span-9 hidden xl:block xl:ml-10">
          <h1 className="text-xl font-medium">SEND US A NOTE</h1>
          <div className="xl:flex xl:gap-5 mt-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#191e22] w-full xl:w-[400px] h-11 rounded-lg mb-4 p-[15px] outline-none "
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#191e22] w-full xl:w-[400px] h-11 rounded-lg mb-4 p-[15px] outline-none"
            />
          </div>
          <textarea
            className="bg-[#191e22] rounded-lg w-full xl:w-[820px] h-[150px] p-4 outline-none mt-5 "
            placeholder="Tell us more about your needs..."
          ></textarea>

          <div className="flex justify-center mt-8">
            <button className="bg-green-600 hover:bg-green-500 w-full xl:w-[170px] h-[50px] rounded-3xl transition duration-300 ease-in-out">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
