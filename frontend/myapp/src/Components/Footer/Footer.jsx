import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-[100%] bg-[#0E2E50] p-6 lg:flex lg:flex-row  flex flex-col items-center">
      <div className="basis-[50%] flex flex-col items-center md:flex md:flex-row gap-4">
        {/* -------------get in touch section */}
        <div className="getInTouchInfo text-[#8696A2]">
          <h2 className="text-[2rem] font-bold text-white">Get In Touch</h2>
          <p>
            <FaLocationDot /> Plot No. 3B, Kapeesh Vihar Colony, Uattardhona,
            near Tiwariganj Chouraha, Lucknow, Uttar Pradesh 226010
          </p>
          <p>
            <FaPhone /> +91 9559625148 , 9839088709
          </p>
          <p>
            <MdOutlineEmail /> a.jproperties786@gmail.com
          </p>
          <div className="socialMediaLogoCL">
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </div>

      {/* --- Gallery section */}
      <div className="basis-[50%] flex gap-2 justify-around">
        {/*----------------- Quick link section */}
        <div>
          <h2 className="text-[2rem] font-bold text-white">Quick Links</h2>
          <div className="qucikLinkDIv">
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              About Us
            </p>

            <p>
              <span>
                <IoIosArrowForward />
              </span>
              Contact Us
            </p>
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              Term & Conditions
            </p>
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex  flex-col items-center">
          <h2 className="text-[2rem] font-bold text-white">Our Top Products</h2>
          <ul className="text-[#8696A7]">
            <li>MOTOR</li>
            <li>CONVERTER</li>
            <li>ADAPTER</li>
            <li>STORAGE</li>
            <li>AUDIO</li>
            <li>PERIPHERAL</li>
            <li>SWITCH</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
