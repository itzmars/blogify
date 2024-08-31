import React, { useState, useEffect, useContext } from "react";
import { addBlog } from "../api/blogs";
import { AuthContext } from "../utilities/userContext";
import "../style.css";

const WriteArticleModal = ({ isVisible, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const { user } = useContext(AuthContext);

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
      onClose();
    } catch (error) {
      console.error("Error submitting the article:", error);
    }
  };

  if (!isVisible) return null;
  return (
    <div className="overlay">
      <div className="overlay-content w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 flex justify-center items-center">
            Write an Article
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
             
              <input
                type="text"
                id="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
             
              <textarea
                id="content"
                rows="6"
                placeholder="Content"
                onChange={(e) => setContent(e.target.value)}
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
       
        <button
          className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WriteArticleModal;
