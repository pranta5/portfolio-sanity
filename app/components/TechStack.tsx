import React from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";




const skillData = [
  { name: "HTML", icon: <FaHtml5 size={40} color="red" /> },
  { name: "CSS", icon: <FaCss3 size={40} color="orange" /> },
  { name: "JAVASCRIPT", icon: <IoLogoJavascript size={40} color="#FFD600" /> },
  { name: "REACT", icon: <FaReact size={40} /> },
  { name: "TYPESCRIPT", icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: "NEXTJS", icon: <RiNextjsFill size={40} /> },
  { name: "Material UI", icon: <SiMui size={40} color="#1C7FB6" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7811F7" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F34F29"/> },
  { name: "Redux", icon: <TbBrandRedux size={40} color="#764ABC"/> },
];

const TechStack = ({stack=""}) => {
  return (
<div className="m-4">
  <h2 className="p-4 font-semibold text-4xl mb-4 ">{stack}</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {skillData.map((skill, index) => (
      <div 
        key={index} 
        className="flex py-4 px-12  duration-300 hover:scale-110 items-center"
      >
        <div className="mr-4">{skill.icon}</div>
        <p className="text-md font-semibold">{skill.name}</p>
      </div>
    ))}
  </div>
</div>
  );
};

export default TechStack;
