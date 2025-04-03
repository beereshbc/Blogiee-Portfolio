import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const { blogs } = useContext(AppContext);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog._id === blogId);
    setBlogData(foundBlog);
    console.log(blogs);
  }, [blogId, blogs]);

  console.log(blogs[0]._id);

  if (!blogData) {
    return <p className="text-center mt-10 text-[#e3e4e3]">Blog not found</p>;
  }

  return (
    <div className="p-6 bg-white">
      <h1 className="text-4xl font-bold text-center mb-4">{blogData.title}</h1>
      <p className="text-center text-gray-600">{blogData.subtitle}</p>

      <div className="mt-6 max-w-3xl mx-auto">
        {blogData.content?.map((item, index) => {
          if (item.type === "text") {
            return (
              <p key={index} className="mb-4 leading-relaxed text-justify">
                {item.value}
              </p>
            );
          } else if (item.type === "image") {
            return (
              <div key={index} className="my-4 flex justify-center">
                <img
                  onClick={() => navigate(`/blog/${blogId}`)}
                  className="w-72 rounded shadow-md cursor-pointer"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogPage;
