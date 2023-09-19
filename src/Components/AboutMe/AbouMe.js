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

export default function AboutMe({ id }) {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "./file/AzizollahResume.pdf";
    link.download = "AzizollahResume.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const name = "Azizollah Payandeh";
  const email = "AzizollahPayandeh1@gmail.com";
  const age = 17;
  const from = "Iran, Mashhad";

  return (
    <div className="w-full xl:h-[100vh] bg-[#212529!important]" id={id}>
      <div className="flex-col justify-center items-center text-center flex">
        <h1 className="text-3xl font-bold xl:mt-28 mt-24">Know Me More</h1>
        <div className="w-[70px] bg-[#20c997] mt-2 h-[3px]" />
      </div>

      <div className="grid xl:grid-cols-12">
        <div className="xl:col-span-7 text-center xl:text-left ml-3 mr-3 xl:ml-14 mt-16">
          <h1 className="text-2xl font-semibold">
            I'm <span className="text-[#20c997]">Azizollah Payandeh</span> a Web
            Developer
          </h1>
          <p className="mt-3 opacity-60">
            Here, I try to have an effective relationship with the community of
            programmers on the web and to be able to have a good friendly
            relationship in the field of the web. I try to put the best projects
            to show you😎✌ <br />
            💪 I am currently focusing more on training and improving my soft
            and hard skills. <br />
            👏 I focus most on JavaScript programming language. <br />
            🧐 Now I am studying Redux and Next.js.
          </p>
        </div>

        <div className="xl:col-span-5 xl:mt-9 xl:ml-16 mt-12 ml-5">
          <InfoItem label="Name" value={name} />
          <hr className="opacity-50 mt-2 xl:w-[400px]" />
          <InfoItem
            label={"Email"}
            value={
              <a
                href={`https://azizollahpayandeh1@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#20c997] hover:underline opacity-80"
              >
                {email}
              </a>
            }
          />

          <hr className="opacity-50 mt-2 xl:w-[400px]" />
          <InfoItem label="Age" value={age} />
          <hr className="opacity-50 mt-2 xl:w-[400px]" />
          <InfoItem label="From" value={from} />
          <button
            className="mt-8 xl:mt-6 bg-green-600 hover:bg-green-500 w-[170px] h-[50px] rounded-3xl transition duration-300 ease-in-out"
            onClick={handleDownloadClick}
          >
            Download CV
          </button>
        </div>
      </div>

      <div className="flex xl:justify-evenly flex-wrap xl:mt-20 mt-12 justify-center ">
        <div className="flex flex-col text-center xl:h-[140px] h-[170px] xl:w-[250px] w-[200px] justify-center sm:mt-7 ">
          <h1 className="xl:text-[50px] opacity-50 -mt-5 text-6xl">2+</h1>
          <p className="mt-2 opacity-80">Years Experience</p>
        </div>

        <div className="flex flex-col text-center xl:h-[140px] h-[170px] xl:w-[250px] w-[200px] justify-center sm:mt-7 ">
          <h1 className="xl:text-5xl opacity-50 text-6xl">10+</h1>
          <p className="mt-2 opacity-80">Happy Clients</p>
        </div>

        <div className="flex flex-col text-center xl:h-[140px] h-[170px] xl:w-[250px] w-[200px] justify-center sm:mt-7 ">
          <h1 className="xl:text-5xl opacity-50 text-6xl">20+</h1>
          <p className="mt-2 opacity-80">Projects Done</p>
        </div>

        <div className="flex flex-col text-center xl:h-[140px] h-[170px] xl:w-[250px] w-[200px] justify-center sm:mt-7 ">
          <h1 className="xl:text-5xl opacity-50 text-6xl ">5+</h1>
          <p className="mt-2 opacity-80">Awards Received</p>
        </div>
      </div>
    </div>
  );
}
