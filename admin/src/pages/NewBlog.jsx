import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NewBlog = () => {
  const [state, setState] = useState(true); //true -->blog false ---> project
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState([{ type: "text", value: "" }]);
  const [images, setImages] = useState([]);
  const backendUrl =
    "https://blogiee-portfolio.onrender.com" ||
    import.meta.env.VITE_BACKEND_URL;

  const addContentBlock = (type) => {
    if (type === "text") {
      setContent([...content, { type: "text", value: "" }]);
    } else if (type === "image") {
      setContent([...content, { type: "image", src: "" }]);
    }
  };

  const handleContentChange = (index, value) => {
    const updatedContent = [...content];
    updatedContent[index].value = value;
    setContent(updatedContent);
  };

  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subTitle);
      formData.append("content", JSON.stringify(content));
      images.forEach((file) => formData.append("images", file));

      const { data } = await axios.post(
        backendUrl + "/api/blog/new-blog",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (data.success) {
        toast.success(data.message);
        console.log(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      const errorMsg = error.response?.data?.message || "Something went wrong!";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="mx-4 sm:mx-[10%] min-h-screen rounded bg-gray-100 py-10 mb-20 gap-3">
      {/* Sidebar for adding content */}
      <div className="fixed top-[110px] text-sm left-4 z-10 flex flex-col gap-4">
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
          onClick={() => {
            setState(!state);
          }}
        >
          + {state ? "New Project" : "New Blog"}
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
          onClick={() => addContentBlock("text")}
        >
          + Add Text
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
          onClick={() => addContentBlock("image")}
        >
          + Add Image
        </button>
      </div>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={submitHandler} className="text-center">
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-4">
            <p className="hero-text font-medium">
              {state ? "Blog" : "Project"}
            </p>
            <input
              className="w-full p-3 text-xl font-semibold border title-font text-center rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              type="text"
              placeholder="Write Title Here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <input
              className="w-full p-3 border text-center text-sm rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              type="text"
              placeholder="Write Sub Title Here"
              onChange={(e) => setSubTitle(e.target.value)}
              value={subTitle}
            />
          </div>

          {/* Content Blocks */}
          <div className="mt-6 space-y-4">
            {content.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                {item.type === "text" ? (
                  <textarea
                    className="w-full p-3 border kannada rounded-md focus:ring-2 focus:ring-blue-400 outline-none min-h-[240px]"
                    placeholder="Write the content here..."
                    value={item.value}
                    onChange={(e) => handleContentChange(index, e.target.value)}
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <input
                      type="file"
                      className="cursor-pointer border rounded-md p-2 w-full text-gray-600"
                      onChange={handleFileChange}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-900 transition-all"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
