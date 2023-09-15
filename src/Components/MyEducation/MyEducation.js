import React from "react";
import EducationBox from "./../EducationBox/EducationBox";
import ProgressBar from "../ProgressBar/ProgressBar";

// آرایه اطلاعات تحصیلی
const educationData = [
  {
    year: "2000 _ 2001",
    certificate: "Computer Science",
    university: "International University",
    dec: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
  },
  {
    year: "2000 _ 2001",
    certificate: "Computer Science",
    university: "International University",
    dec: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
  }
];

// آرایه اطلاعات مهارت‌ها
const skillsData = [
  { progress: "80", title: "HTML" },
  { progress: "50", title: "JavaScript" },
  { progress: "20", title: "React" },
  { progress: "50", title: "React" },
  { progress: "65", title: "React" },
  { progress: "75", title: "React" }
];

export default function MyEducation() {
  const handleDownloadClick = () => {
       
    const link = document.createElement('a');
    link.href = './file/AzizollahResume.pdf'; 
    link.download = 'AzizollahResume.pdf'; 
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div>
      <div className="leftEducation xl:ml-11 xl:mt-20 mt-20 ml-5 ">
        <div className="myEducationContainer xl:flex">
          {/* کامپوننت MyEducationSection برای نمایش بخش "My Education" و "My Experience" */}
          <MyEducationSection title="My Education" data={educationData} />
          <MyEducationSection title="My Experience" data={educationData} />
        </div>
      </div>

      <div className="mt-11 ml-4 mr-4 xl:ml-11">
        <h1 className="text-2xl font-semibold mb-4">My Skills</h1>
        <div className="grid xl:grid-cols-2 gap-6"> {/* تغییر اعمال شده */}
          {skillsData.map((skill, index) => (
            <div className="mb-4">
             <ProgressBar key={index} progress={skill.progress} Title={skill.title} />
            </div>
          ))}
        </div>
      </div>

      <div className=" text-center">
        <button className=" mt-11 xl:mt-16 border hover:bg-gray-400 opacity-50 w-[170px] h-[50px] rounded-3xl transition duration-300 ease-in-out mb-11" onClick={handleDownloadClick}>
          Download CV
        </button>
      </div>
    </div>
  );
}

// کامپوننت MyEducationSection برای نمایش بخش "My Education" و "My Experience"
function MyEducationSection({ title, data }) {
  return (
    <div className="myEducation xl:w-[50%] mb-14">
      <div className="title">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      {data.map((item, index) => (
        <EducationBox
          key={index}
          year={item.year}
          certificate={item.certificate}
          university={item.university}
          dec={item.dec}
        />
      ))}
    </div>
  );
}
