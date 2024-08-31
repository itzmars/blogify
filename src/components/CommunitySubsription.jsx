import React from "react";
import "../style.css";

const CommunitySubsription = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Subscribe In Our Community</h2>
          <p className="mt-2">Stay Updated with the Latest Posts!
          </p>
          <div className=" m-6 flex gap-1">
            <input
              placeholder="Email"
              type="text"
              className=" border border-gray-900 border-radius-8"
            />
            <span>
              <button className="bg-gray-900 text-white px-4 py-2">
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <div className="flex justify-end">
        <button
          className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
          onClick={onClose}
        >
          Close
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default CommunitySubsription;
