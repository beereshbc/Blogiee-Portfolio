import React from "react";
import { assets } from "../assets/assets";
// Replace with your actual image path

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] p-6">
      <div className="max-w-3xl shining-bg bg-[#D6C7A1] rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 flex justify-center items-start  p-4">
          <img
            src={assets.profile_img}
            alt="Profile"
            className="w-full h-auto rounded-md shadow-md border-4 shining-bg border-[#D6C7A1]"
          />
        </div>
        {/* Left Section */}
        <div className="p-6 md:w-1/2">
          <h1 className="text-4xl font-bold text-[#1E1C1A] hero-text">
            ABOUT ME
          </h1>
          <div className="bg-[#1E1C1A] text-white py-2 px-4 mt-2 rounded-md inline-block text-lg font-semibold">
            BEERESH KUMAR B C
          </div>
          <p className="mt-4 text-[#1E1C1A] text-sm leading-relaxed">
            Student at{" "}
            <span className="text-md font-medium hero-text">
              GM INSTITUTE OF TECHNOLOGY DAVANAGERE
            </span>{" "}
            Persuing{" "}
            <span className="text-md font-medium hero-text">
              COMPUTER SCIENCE ENGINEERING - 2027
            </span>
          </p>
          <p className="mt-4 text-xl font-medium text-[#1E1C1A] leading-relaxed hero-text">
            AIML Enthusiast | MERN Developer
          </p>
          <p className="mt-4 text-[#1E1C1A] text-sm leading-relaxed">
            I specialize in MERN stack development, building scalable and
            user-centric applications. With a strong focus on front-end,
            back-end APIs, and full-stack integration, I thrive in collaborative
            environments and enjoy solving real-world problems through
            technology. Passionate about continuous learning, I stay updated
            with the latest web technologies to enhance my skills and contribute
            to innovative projects. Let’s connect and create! 🚀
          </p>
          <p className="mt-6 text-sm font-semibold text-center flex gap-2 text-[#1E1C1A]">
            <img className="w-5" src={assets.linkdin_icon} alt="" />
            beereshkumarbc
          </p>
        </div>

        {/* Right Section - Image */}
      </div>
    </div>
  );
};

export default Contact;
