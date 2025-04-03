import React, { useContext } from "react";

import Footer from "../compnents/Footer";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const Blog = () => {
  const navigate = useNavigate();

  const { blogs, getBlogs } = useContext(AppContext);
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className=" mx-4 sm:mx-[10%] rounded-lg min-h-screen mb-5">
        {blogs.map((blog, blogIndex) => (
          <div
            key={blogIndex}
            className="mb-12 bg-[#e3e4e3] border rounded-2xl"
          >
            <div className="text-center w-full py-4">
              <h1 className="title-font text-5xl mb-2">{blog.title}</h1>
              <p className="text-xs sm:text-sm">{blog.subtitle}</p>
            </div>
            <div
              onClick={() => navigate(`/blog/${blog._id}`)}
              className="p-4 max-w-4xl cursor-pointer mx-auto kannada"
            >
              {blog.content.map((block, index) => {
                if (block.type === "text") {
                  return (
                    <p
                      key={index}
                      className="mb-4 leading-relaxed text-justify text-sm sm:text-[16px]"
                    >
                      {block.value}
                    </p>
                  );
                } else if (block.type === "image") {
                  return (
                    <div key={index} className="my-4 flex justify-center">
                      <img
                        className="sm:w-[600px] w-72 shadow-md cursor-pointer border rounded-lg"
                        src={block.src}
                        alt={block.alt}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
