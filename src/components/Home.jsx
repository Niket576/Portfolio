import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

import pic from '/public/Niket_img.jpg';

const Home = () => {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text-white'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome to my feed</span>
            <div className='flex space-x-2 text-2xl md:text-4xl'>
              <h1>Hello, I'm a </h1>
              {/* <span className='text-red-700 font-bold'> Developer</span> */}
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>
              A checksum is a value that represents the number of bits 
              in a transmission message.IT professionals use it to detect 
              high-level errors within data transmissions. Prior to transmission, 
              every piece of data or file can be assigned a checksum value after 
              running a cryptographic hash function.
            </p>
            <br />
            {/* social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className='space-y-2'>
                  <h1 className='font-bold ml-7 md:ml-0'>Available On</h1>
                  <ul className='flex space-x-5'>
                    <li className='text-2xl cursor-pointer'>
                      <a href="https://www.linkedin.com/" target='_blank'>
                        <IoLogoLinkedin />
                      </a>
                    </li>
                    <li className='text-2xl cursor-pointer'>
                      <a href="https://www.github.com/" target='_blank'>
                        <FaGithub />
                      </a>                     
                    </li>
                    <li className='text-2xl cursor-pointer'>
                      <a href="https://www.facebook.com/" target='_blank'>
                        <FaSquareFacebook />
                      </a>                     
                    </li>
                    <li className='text-2xl cursor-pointer'>
                      <a href="https://www.twitter.com/" target='_blank'>
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li className='text-2xl cursor-pointer'>
                      <a href="https://www.instagram.com/" target='_blank'>
                        <FaSquareInstagram />
                      </a>  
                    </li>
                  </ul>
                </div>
                <div className='space-y-2'>
                  <h1 className='font-bold'>Currently working on</h1>
                  <div className='flex space-x-5'>
                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    <IoLogoReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                  </div>
                </div>
            </div>
            <div className='pt-10 flex gap-x-5'>
              <div>
                <a
                  href='https://drive.google.com/file/d/1KPA-YqChCpJ9e6reRGz--iZVDdxJoogR/view?usp=sharing'
                  target='_blank'
                  download
                  className='px-6 py-2 border-2 border-white rounded-full text-white hover:border-blue-800 hover:text-white tansition duration-300'
                >
                  Resume
                </a>
              </div>
              <div>
                <a
                  href='https://github.com/dashboard'
                  target='_blank'
                  download 
                  className='px-7 py-2 border-2 border-white rounded-full text-white hover:border-blue-800 hover:text-white tansition duration-300'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img 
              src={pic} 
              className='rounded-full md:h-[380px] md:w-[600] px-6' 
              alt="" 
            />
          </div>
        </div>
      </div> 
      <hr/>
    </>
  )
}

export default Home;
