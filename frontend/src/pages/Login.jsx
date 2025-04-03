import { useState } from "react";
// import axios from "axios";

const Login = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState([{ type: "text", value: "" }]);
  const [images, setImages] = useState([]);

  const handleAddContent = (type) => {
    setContent([...content, { type, value: "" }]);
  };

  const handleChangeContent = (index, value) => {
    const updatedContent = [...content];
    updatedContent[index].value = value;
    setContent(updatedContent);
  };

  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", JSON.stringify(content));
    images.forEach((file) => formData.append("images", file));

    try {
      const response = await axios.post(
        "http://localhost:5000/api/blogs",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Blog Created Successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        required
      />

      {content.map((item, index) => (
        <div key={index}>
          {item.type === "text" ? (
            <textarea
              placeholder="Enter text"
              value={item.value}
              onChange={(e) => handleChangeContent(index, e.target.value)}
              required
            />
          ) : (
            <input type="file" onChange={handleFileChange} required />
          )}
        </div>
      ))}

      <button type="button" onClick={() => handleAddContent("text")}>
        Add Text
      </button>
      <button type="button" onClick={() => handleAddContent("image")}>
        Add Image
      </button>
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default Login;
