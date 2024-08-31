import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Welcome to Blogify
          </h1>
          <p className="text-2xl mt-5 text-gray-600">
            Blogify is your ultimate platform for sharing, discovering, and
            engaging with captivating content. Whether you're an aspiring
            writer, a seasoned blogger, or an avid reader, Blogify offers a
            seamless and enriching experience for everyone.
          </p>
          <div className="mt-8">
            <a
              href="/article-list"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
            >
              Start Reading
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
