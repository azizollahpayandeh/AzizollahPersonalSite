import React from "react";

export default function AbouMe() {
  const name = "Azizollah Payandeh";
  const email = "AzizollahPayandeh1@gmail.com";
  const age = 17;
  const from = "Iran, Mashhad";

  return (
    <div className="w-[100%] xl:h-[100vh] 2xl:h-[80vh] bg-[rgb(28, 30, 31)]  ">
      <div className="flex-col justify-center items-center text-center flex ">
        <h1 className="text-3xl font-bold xl:mt-28 mt-24">Know Me More</h1>
        <div className="w-[70px]  bg-[#20c997] mt-2 h-[2px]" />
      </div>

      <div className=" grid xl:grid-cols-12 ">
        <div className="xl:col-span-7   text-center xl:text-left ml-3 mr-3 xl:ml-14 2xl:ml-36 mt-16  ">
          <h1 className="text-3xl font-semibold ">
            I'm <span className="text-[#20c997]">Azizollah Payandeh</span> a Web
            Developer
          </h1>
          <p className="mt-3 opacity-60 ">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
            <br />
            <br />
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a
            <br />
            galley.
          </p>
        </div>

        <div className="xl:col-span-5 xl:mt-9  xl:ml-14 2xl:ml-10 mt-12 ml-5">
          <h1 className=" mt-5 "><span className="font-semibold">Name:  </span> <span className="opacity-80">{name} </span></h1>
          <hr  className="2xl:opacity-0 opacity-50 mt-2 xl:w-[400px]  "/>
          <li className="list-none mt-5"> <a href="#" ><span className="font-semibold">Email:  </span> <span className="opacity-50 mt-2 xl:w-[400px]  text-[#20c997]">{email}</span></a></li>
          <hr  className="2xl:opacity-0 opacity-50 mt-2 xl:w-[400px]  "/>
          <h1 className=" mt-5"><span className="font-semibold">Age:  </span> <span className="opacity-80">{age}</span> </h1>
          <hr  className="2xl:opacity-0 opacity-50 mt-2 xl:w-[400px]  "/>
          <h1 className=" mt-5"><span className="font-semibold">From:  </span> <span className="opacity-80">{from}</span> </h1>
          <button className=" 2xl:mt-7 mt-8 xl:mt-6 bg-green-400 hover:bg-green-300 w-[170px] h-[50px] rounded-3xl transition duration-300 ease-in-out">Download CV</button>
        </div>

      </div>

      <div className="flex xl:justify-evenly flex-wrap xl:mt-20 mt-12  ml-6 ">

      <div  className="flex flex-col text-center h-[140px] w-[250px] xl:border-r-[1px]   justify-center  "> 
          <h1 className="text-5xl opacity-50 ">2+</h1>
          <p className="mt-2 opacity-85">Years Experiance</p>
        </div>



      <div  className="flex flex-col text-center h-[140px] w-[250px] xl:border-r-[1px]  justify-center  "> 
          <h1 className="text-5xl opacity-50 ">50+</h1>
          <p className="mt-2 opacity-85">Happy Clients</p>
        </div>


        <div  className="flex flex-col text-center h-[140px]16 w-[250px] xl:border-r-[1px]  justify-center  "> 
          <h1 className="text-5xl opacity-50  mt-3">20+</h1>
          <p className="mt-2 opacity-85">Projects Done</p>
        </div>


        <div  className="flex flex-col text-center h-[140px]16 w-[250px]  justify-center"> 
          <h1 className="text-5xl opacity-50 mt-3 ">5+</h1>
          <p className="mt-2 opacity-85">Get Awards</p>
        </div>


      </div>
    </div>
  );
}
