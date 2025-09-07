import React from "react";
import "./Project.css";

const projects = [
  {
    id: "01",
    title: "Whisper",
    viewlink: "https://whisper-app-fa6u.onrender.com/",
    sourcecodelink: "https://github.com/Niket576/Whisper_App.git",
    para: `A real-time language exchange platform built with the MERN stack. 
    It offers seamless text, audio, and video chat using WebRTC and Socket.io, plus a 
    customizable interface with 32 themes. Whether you're learning a new language or 
    connecting globally, Whisper makes communication effortless and engaging.`,
  },

  {
    id: "02",
    title: "Maison",
    viewlink: "https://maison-os9f.onrender.com",
    sourcecodelink: "https://github.com/Niket576/Maison.git",
    para: `A modern e-commerce platform built with the MERN stack. It features secure JWT 
    authentication, Stripe-powered checkout, and dynamic coupons. With Redis caching and 
    optimized backend performance, Maison delivers fast, reliable shopping across 50+ products 
    and 10+ categories—designed for scale and smooth user experience.`,
  },

  {
    id: "03",
    title: "Pice",
    viewlink: "http://localhost:8081/",
    sourcecodelink: "https://github.com/Niket576/Pice_Mobile.git",
    para: `A cross-platform recipe app built with the PERN stack and Expo. It features secure Clerk 
    authentication, real-time search, and personalized recipe filtering. With embedded YouTube tutorials 
    and a persistent favorites system, Pice delivers an engaging, interactive, and user-friendly cooking 
    experience for food lovers.`,
  },

  {
    id: "04",
    title: "TextTool",
    viewlink: "https://niket576.github.io/TextTool/",
    sourcecodelink: "https://github.com/Niket576/TextTool.git",
    para: `TextTool is an efficient text utility designed to simplify text processing. With
            its intuitive interface and essential text functions, it's the perfect companion
            for students, writers, and professionals who need a simple yet powerful text editor.
            Try TextTool today & streamline your text editing experience!`,
  },

  { id: "05", title: "" },

  { id: "06", title: "" },
];

const Project = () => {
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white mb-20"
    >
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold mb-2 mt-10 projects">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border-2 border-gray-400 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 h-[300px]"
          >
            <div>
              {/* <h2 className="text-white text-xl font-bold">{project.id}</h2> */}
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-2xl font-bold mt-2">
                {project.title}
              </h3>
            </div>
            <div className="pb-1 h-[150px]">
              <p className="text-gray-300 mt-2 text-sm text-justify">
                {/* Web development is the process of building, programming... */}
                {project.para}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <div>
                <p className="mt-4 text-white font-medium flex items-center gap-2">
                  <a
                    href={project.viewlink}
                    target="_blank"
                    className="px-5 py-1 border-2 border-white rounded-full text-white hover:border-blue-800 hover:text-white tansition duration-300"
                  >
                    View
                    {/* <span className="text-xl">→</span> */}
                  </a>
                </p>
              </div>
              <div>
                <p className="mt-4 text-white font-medium flex items-center gap-2">
                  <a
                    href={project.sourcecodelink}
                    target="_blank"
                    className="px-5 py-1 border-2 border-white rounded-full text-white hover:border-blue-800 hover:text-white tansition duration-300"
                  >
                    Source Code
                    {/* <span className="text-xl">→</span> */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Project;
