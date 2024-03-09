import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Container from "./Container";
const Footer = () => {
  return (
    <Container bgColor={"#0C4A6E"}>
      <div className="min-h-[40vh]  py-[10px] w-full bg-sky-900	 flex flex-col md:flex-row px-2 md:px-0 text-white  items-center justify-between">
        <div>
          <div className="flex  gap-[20px]">
            <div className="w-[80px] flex  items-center justify-center">
            <img src="./logo.png" className="w-[60px]" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[17px] font-semibold">
                Follow us on social media
              </p>
              <div className="flex items-center mt-2 gap-4 text-[20px]">
                <FaFacebookSquare />
                <FaTwitter />
                <FaLinkedin />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white mt-5"></div>
          <div className="flex gap-[70px] text-[10px] my-[10px]">
            <p>© 2024 Apna | All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className="md:w-[450px] flex items-center justify-center gap-6 rounded-lg md:min-h-[25vh] text-black bg-white py-[10px] px-[10px] md:px-[10px] md:py-[20px]">
          <div className="flex flex-col items-start gap-2 justify-start">
            <p className="text-[16px] md:text-[22px] font-semibold">Apply on the go</p>
            <p>Get real time job updates on our App</p>
            <img src="playstore.png" className="w-[120px] md:w-[150px] -mx-2" alt="" />
          </div>
          <div>
            <img src="./qr.png" className="w-[100px] md:w-[120px]" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
