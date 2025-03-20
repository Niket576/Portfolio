import React from 'react'
import pic from '/public/Niket_img.jpg';


const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white mb-20'>
      <div className='flex justify-center'>
        <h1 className='text-5xl font-semibold mb-0'>ABOUT ME</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-20'>
        <div className='md:w-30% md:ml-35 md:mt-20 mt-5 order-1'>
          <img 
            src={pic} 
            className='rounded-lg md:ml-35 ' 
            alt="" 
          />
        </div>
        <div className='md:w-70% mt-12 md:mt-20 md:mr-20 space-y-2 order-2 md:order-1'>
            <p>
              I am an experienced Frontend Developer with over a decade of professional 
              expertise in the field. Throughout my career, I have had the privilege of 
              collaborating with prestigious organizations, contributing to their success
               and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my extensive 
              experience but also in the enthusiasm and dedication I bring to each project.
            </p>
            <div className='pt-10 space-y-3 '>
                <div className="flex flex-col md:flex-row items-center hover:scale-110 duration-300">
                  <span className="w-40 font-medium text-xl">HTML & CSS</span>
                  <div className="w-full rounded-full h-2 pl-10">
                    <div className="bg-gradient-to-r from-purple-500 to-orange-400 h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center hover:scale-110 duration-300">
                  <span className="w-40 font-medium text-xl">React Js</span>
                  <div className="w-full rounded-full h-2 pl-10">
                    <div className="bg-gradient-to-r from-purple-500 to-orange-400 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center hover:scale-110 duration-300">
                  <span className="w-40 font-medium text-xl">JavaScript</span>
                  <div className="w-full rounded-full h-2 pl-10">
                    <div className="bg-gradient-to-r from-purple-500 to-orange-400 h-2 rounded-full w-[60%]"></div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center hover:scale-110 duration-300">
                  <span className="w-40 font-medium text-xl">Node JS</span>
                  <div className="w-full rounded-full h-2 pl-10">
                    <div className="bg-gradient-to-r from-purple-500 to-orange-400 h-2 rounded-full w-[40%]"></div>
                  </div>
                </div>
                
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
