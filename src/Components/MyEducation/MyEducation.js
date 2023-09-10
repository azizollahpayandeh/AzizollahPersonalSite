import React from "react";
import EducationBox from "./../EducationBox/EducationBox";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function MyEducation() {
  const progress = {
    first: '80',
    second: '50',
    third: '20',
    fourth: '50',
    fifth: '65',
    sixth: '75'
  }

  return (
    <div>
      <div className="leftEducation xl:ml-11 xl:mt-20 mt-20 ml-5 ">
        <div className="myEducation xl:w-[50%]  float-left mb-14 ">
          <div className="title ">
            <h1 className="text-2xl font-semibold">My Education</h1>
          </div>
          <EducationBox
            year="2000 _ 2001"
            certificate="Computer Science"
            university="International University"
            dec="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
          />
          <EducationBox
            year="2000 _ 2001"
            certificate="Computer Science"
            university="International University"
            dec="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
          />

          <div className=" mt-11">
            <h1 className="text-2xl font-semibold mb-4">My Skils</h1>
            <ProgressBar progress={progress.first} Title="HTML" />
          </div>

          <div className=" mt-11">
            <ProgressBar progress={progress.second} Title="JavaScript" />
          </div>

          <div className=" mt-11">
            <ProgressBar progress={progress.third} Title="React" />
          </div>
        </div>

        <div className="myEducation xl:w-[50%] xl:float-right float-left mb-14  ">
          <div className="title ">
            <h1 className="text-2xl font-semibold">My Experience</h1>
          </div>
          <EducationBox
            year="2000 _ 2001"
            certificate="Computer Science"
            university="International University"
            dec="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
          />

          <EducationBox
            year="2000 _ 2001"
            certificate="Computer Science"
            university="International University"
            dec="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
          />
          <div className=" mt-11">
            <ProgressBar progress={progress.fourth} Title="React" />
          </div>

          <div className=" mt-11">
            <ProgressBar progress={progress.fifth} Title="React" />
          </div>

          <div className=" mt-11">
            <ProgressBar progress={progress.sixth} Title="React" />
          </div>
        </div>
      </div>
    </div>
  );
}

// after set your own data, please optimize this code.
