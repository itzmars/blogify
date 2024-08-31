import React, { useEffect, useState } from "react";

import { getBlogs } from "../api/blogs";
import Articles from "../components/Articles";
import NotFound from "./NotFound";
import WriteArticleModal from "../components/WriteArticleModal";

const ArticleList = () => {
  const [blogs, setBlogs] = useState([]);

  const [isOpenPopup, setOpenPoppup] = useState(false);

  const handleOpenPop = () => {
    setOpenPoppup(true)
  };

  const handleClosePop = () => {
    setOpenPoppup(false)
  };




  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await getBlogs();

        console.log(blogs);
        setBlogs(blogs);
      } catch (error) {
        console.log(error);
        setBlogs(null);
      }
    };

    fetchData();
  }, []);

  if (!blogs) return <NotFound />;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
          Blog Articles
        </h1>
        <button
          className="flex flex-row justify-between items-center gap-x-2"
          onClick={handleOpenPop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-pencil-square text-gray-500 fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
          <span>
            <p className="sm:text-2xl text-gray-500">Write</p>
          </span>
        </button>
        <WriteArticleModal isVisible={isOpenPopup} onClose={handleClosePop} />
      </div>

      <div className="container py-3 mx-auto">
        <div className="flex flex-wrap -m-4">
         <Articles articles={blogs} /> 
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
