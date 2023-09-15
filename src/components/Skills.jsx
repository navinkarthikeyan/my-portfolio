import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
export default function Skills() {
  return (
    <div className="skillsmajor">
      <div className="skillscontent">
        <div className="skillstitle">Front End Developer</div>
        <div className="skillssummary">
          i have knowlege in html, css, javascript, reactjs, python
        </div>
      </div>
      <div className="skillsicon">
        <div className="icon" id="htmlicon">
          <AiOutlineHtml5 />
        </div>
        <div className="icon" id="cssicon">
          <FaCss3Alt />
        </div>
        <div className="icon" id="jsicon">
          <BiLogoJavascript />
        </div>
        <div className="icon" id="reacticon">
          <FaReact />
        </div>
        <div className="icon" id="pythonicon">
          <FaPython />
        </div>
      </div>
    </div>
  );
}
