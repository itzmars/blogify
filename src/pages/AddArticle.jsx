import React, { useState, useContext } from "react";
import { addBlog } from "../api/blogs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utilities/userContext";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const { user } = useContext(AuthContext);

  

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", user.username);
    if (image) {
      formData.append("thumbnail", image);
    }

    console.log("Article Submitted:", {
      title,
      content,
      author,
      image: image ? image.name : "No image selected",
    });

    try {
      const data = await addBlog(formData);

      navigate("/home");
    } catch (error) {
      console.error("Error submitting the article:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 flex justify-center items-center">
        Write an Article
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shaddow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-slate-900 text-white font-semibold rounded-md shadow-sm hover:bg-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
