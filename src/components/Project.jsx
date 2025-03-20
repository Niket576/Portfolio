import React from "react";

const projects = [
  { id: "01", title: "Web design" },
  { id: "02", title: "Graphics design" },
  { id: "03", title: "Social media" },
  { id: "04", title: "App design" },
  { id: "05", title: "Digital marketing" },
  { id: "06", title: "Content writing" },
];

const Project = () => {
  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white mb-20'>
        <div className='flex justify-center'>
            <h1 className='text-5xl font-bold mb-2 mt-10'>PROJECTS</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border-2 border-gray-400 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 min-h-[300px]"
          >
            <h2 className="text-white text-xl font-bold">{project.id}</h2>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-2xl font-bold mt-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2">
              Web development is the process of building, programming...
            </p>
            <p className="mt-4 text-white font-medium flex items-center gap-2">
              Read More <span className="text-xl">→</span>
            </p>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Project;
