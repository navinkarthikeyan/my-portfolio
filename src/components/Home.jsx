import React from "react";
import { Link } from "react-router-dom";
import pfp from "./pfp.jpeg";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export default function Home() {
  return (
    <div className="contenthome">
      <div className="c1">
        <div className="c0">Hey , I'am Navin</div>
        <div className="c3">
          <div className="icone">
            <HiOutlineMail />
          </div>
          <div className="icons">
            <BsGithub />
          </div>
          <div className="icons">
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div className="c2">
        <img src={pfp} alt="" />
      </div>
    </div>
  );
}
