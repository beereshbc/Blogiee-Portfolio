import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const feedbackHandler = (event) => {
    event.prventDefault;
    try {
      console.log(feedback);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#e4e3e4] flex flex-col justify-around mx-4 sm:mx-[10%] my-7 border rounded-lg py-10 px-4">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-y-6 sm:gap-y-0 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <p
            onClick={() => navigate("/")}
            className="text-2xl font-semibold app-logo cursor-pointer"
          >
            Blogiee
          </p>
          <p className="text-sm">
            Stay in the loop and sign up for the <br /> Wardiere newsletter:
          </p>
          <div className="mt-6 flex sm:justify-start border border-[#171717] px-1 pl-4 w-full sm:w-[400px] py-1 rounded-full">
            <input
              className="border-none outline-none bg-transparent mr-2 w-full text-[#171717]"
              onChange={(e) => setFeedback(e.target.value)}
              value={feedback}
              placeholder="Give your feedback"
            />
            <button
              onClick={feedbackHandler}
              className="border shining-bg  py-2 px-6 rounded-full"
            >
              Send
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center sm:justify-between gap-10 text-center sm:text-left">
          <div>
            <p className="font-semibold">Company</p>
            <ul className="text-sm space-y-1 text-center">
              <li className="cursor-pointer" onClick={() => navigate("/")}>
                Home
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  navigate("/projects");
                }}
              >
                Projects
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold ">Documentation</p>
            <ul className="text-sm space-y-1 items-center text-center">
              <li
                className="cursor-pointer"
                onClick={() => {
                  navigate("/blog");
                }}
              >
                Blog
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold items-center ">Social</p>
            <div className="text-sm space-y-1 flex flex-col">
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/beereshkumar-b-c-004397341"
              >
                LinkedIn
              </a>
              <a
                className="cursor-pointer"
                href="https://www.instagram.com/mr_bir_bal_/"
              >
                Instagram
              </a>
              <a className="cursor-pointer" href="https://github.com/beereshbc">
                GitHub
              </a>
              <a className="cursor-pointer" href="https://x.com/BBchatrad?s=08">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6">
        <hr className="h-0.5 bg-[#171717]" />
        <div className="flex flex-col sm:flex-row justify-between px-4 mt-2 text-center sm:text-left">
          <p>© Blogiee. All Rights Reserved 2025</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
