import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NewBlog from "./pages/NewBlog";
import Edit from "./pages/Edit";
import EditBlog from "./pages/EditBlog";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/new" element={<NewBlog />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/edit/:blogId" element={<EditBlog />} />
      </Routes>
    </div>
  );
};

export default App;
