import React from "react";

// Reusable component for name, email, age, and from
function InfoItem({ label, value }) {
  return (
    <div className="mt-5">
      <span className="font-semibold">{label}: </span>
      <span className="opacity-80">{value}</span>
    </div>
  );
}

export default function AboutMe({id}) {
  const name = "Azizollah Payandeh";
  const email = "AzizollahPayandeh1@gmail.com";
  const age = 17;
  const from = "Iran, Mashhad";

  return (
    <div className="w-full xl:h-[105vh] 2xl:h-[80vh] bg-[#212529!important]" id={id}>
      <div className="flex-col justify-center items-center text-center flex">
        <h1 className="text-3xl font-bold xl:mt-28 mt-24">Know Me More</h1>
        <div className="w-[70px] bg-[#20c997] mt-2 h-[3px]" />
      </div>

      <div className="grid xl:grid-cols-12">
        <div className="xl:col-span-7 text-center xl:text-left ml-3 mr-3 xl:ml-14 2xl:ml-36 mt-16">
          <h1 className="text-2xl font-semibold">
            I'm <span className="text-[#20c997]">Azizollah Payandeh</span> a Web Developer
          </h1>
          <p className="mt-3 opacity-60">
            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled make make a type specimen book.
            <br />
            Delivering work within time and budget which meets client’s requirements is our motto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>

        <div className="xl:col-span-5 xl:mt-9 xl:ml-14 2xl:ml-10 mt-12 ml-5">
          <InfoItem label="Name" value={name} />
          <hr className="2xl:opacity-0 opacity-50 mt-2 xl:w-[400px]" />
          <InfoItem label="Email" value={email} />
          <hr className="2xl:opacity-0 opacity-50 mt-2 xl:w-[400px]" />
          <InfoItem label="Age" value={age} />
          <hr className="2xl:opacity-0 opacity-50 mt-2 xl:w-[400px]" />
          <InfoItem label="From" value={from} />
          <button className="2xl:mt-7 mt-8 xl:mt-6 bg-green-600 hover:bg-green-500 w-[170px] h-[50px] rounded-3xl transition duration-300 ease-in-out">
            Download CV
          </button>
        </div>
      </div>

      <div className="flex xl:justify-evenly flex-wrap xl:mt-20 mt-12 justify-center">
        <div className="flex flex-col text-center h-[140px] w-[250px] xl:border-r-[1px]  justify-center  sm:mt-7 ">
          <h1 className="xl:text-[50px] opacity-50  2xl:ml-[-80px] -mt-5  text-6xl">
            2+
          </h1>
          <p className="mt-2 opacity-80 2xl:ml-[-80px]">Years Experience</p>
        </div>

        <div className="flex flex-col text-center h-[140px] w-[250px] xl:border-r-[1px] justify-center  sm:mt-7 ">
          <h1 className="xl:text-5xl opacity-50  2xl:ml-[-80px] text-6xl">
            50+
          </h1>
          <p className="mt-2 opacity-80 2xl:ml-[-80px]">Happy Clients</p>
        </div>

        <div className="flex flex-col text-center h-[140px]  w-[250px] xl:border-r-[1px]  justify-center  sm:mt-7 ">
          <h1 className="xl:text-5xl opacity-50  2xl:ml-[-80px] text-6xl">
            20+
          </h1>
          <p className="mt-2 opacity-80 2xl:ml-[-80px]">Projects Done</p>
        </div>

        <div className="flex flex-col text-center h-[140px] 16 w-[250px]  justify-center sm:mt-7 ">
          <h1 className="xl:text-5xl opacity-50  2xl:ml-[-80px] text-6xl ">
            5+
          </h1>
          <p className="mt-2 opacity-80 2xl:ml-[-80px]">Awards Received</p>
        </div>
      </div>
    </div>
  );
}
