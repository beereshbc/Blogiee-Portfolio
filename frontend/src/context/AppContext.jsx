import { createContext } from "react";
// import { blogs } from "../assets/assets";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/blog/blogs");
      if (data.success) {
        setBlogs(data.blogData);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Failed to fetch blogs");
      } else {
        toast.error(error.message || "Network error occurred");
      }
    }
  };

  const value = { blogs, getBlogs };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
