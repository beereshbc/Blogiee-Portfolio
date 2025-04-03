import React from "react";
import { projects } from "../assets/assets";
import Footer from "../compnents/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="flex flex-col mx-4 sm:mx-[10%]">
          {projects.map((project, index) => (
            <div key={index} className="max-w-screen-lg mx-auto">
              {/* Image */}
              <div className="flex justify-center mt-10 mb-[-20px] z-10">
                <img
                  className="w-[600px] md:w-[400px] sm:w-[300px] max-w-full border rounded-lg shadow-lg"
                  src={project.src}
                  alt=""
                />
              </div>

              {/* Project Details */}
              <div className="bg-[#e3e4e3] mx-2 sm:mx-[8%] p-6 rounded-2xl shadow-md mb-20">
                <div className="text-center mt-8">
                  <p className="text-2xl font-medium hero-text">
                    {project.title}
                  </p>
                  <p>{project.subtitle}</p>
                </div>
                <p className="px-4 py-8 sm:px-10 md:px-10 text-justify text-sm">
                  {project.description}
                </p>
                <div className="flex justify-center gap-6 mx-auto items-center text-center">
                  <a
                    className="px-4 py-2 border shadow-[#d4af37] shining-bg rounded-full glowing-shadow cursor-pointer hero-text text-sm"
                    href="https://www.linkedin.com/in/beereshkumar-b-c-004397341"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="px-4 py-2 shining-bg shadow-[#d4af37] border rounded-full glowing-shadow cursor-pointer hero-text text-sm"
                    href="https://github.com/beereshbc"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
