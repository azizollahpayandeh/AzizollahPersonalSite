import React from "react";
import EducationBox from "./../EducationBox/EducationBox";

export default function MyEducation() {
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
        </div>
      </div>
    </div>
  );
}
