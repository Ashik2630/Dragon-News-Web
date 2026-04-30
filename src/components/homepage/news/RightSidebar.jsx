import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import instagram from '@/assets/instagram.png'
import Image from "next/image";
import swimming from '@/assets/swimming.png'
import classImg from '@/assets/class.png'
import playImag from '@/assets/playground.png'
import backgroundImg from '@/assets/bg.png'


const RightSidebar = () => {
  return (
    <div className="max-w-71 ">
      <h2 className="font-bold text-lg mb-4">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn border-black">
          <FaGithub /> Login With Github
        </button>
      </div>
      <div>
        <div>
          <h2 className="text-lg font-semibold mt-5 mb-5">Find Us On</h2>
          <div>
            <button className="flex btn justify-center items-center gap-4  py-7 pr-34">
              <div className="bg-[#F3F3F3] w-10 h-10 rounded-full flex justify-center items-center text-xl text-blue-500">
                <FaFacebook />
              </div>{" "}
              Facebook
            </button>
            <button className="flex btn justify-center items-center gap-4 py-7 pr-39">
              <div className="bg-[#F3F3F3] w-10 h-10 rounded-full flex justify-center items-center text-xl text-blue-500">
                <FaTwitter />
              </div>{" "}
              Twitter
            </button>
            <button className="flex btn justify-center items-center gap-4 py-7 pr-33">
              <div className="bg-[#F3F3F3] w-10 h-10 rounded-full flex justify-center items-center text-xl ">
                <Image src={instagram} alt="instagram"/>
              </div>{" "}
              InstaGram
            </button>
          </div>
        </div>
      </div>
      {/* option-3 */}
      <div className="mt-10 py-5 bg-[#F3F3F3]">
        <h2 className="font-semibold text-lg ml-3">Q-Zone</h2>
        <div className="ml-2">
            <Image src={swimming} alt="swimming"/>
            <Image src={classImg} alt="classImg"/>
            <Image src={playImag} alt="playImag"/>
        </div>
      </div>
      {/* option-4 */}
      <div className="mt-2 ml-2">
        <Image src={backgroundImg} alt="backgroundImg"/>
      </div>
    </div>
  );
};

export default RightSidebar;
