import React, { useState } from "react";
import CommunitySubsription from "../components/CommunitySubsription";

const About = () => {
  const [isOpenPopup, setOpenPoppup] = useState(false);

  const handleOpenPop = () => {
    setOpenPoppup(true)
  };

  const handleClosePop = () => {
    setOpenPoppup(false)
  };

  return (
    <div className="bg-gray-100 py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900">
            About Blogify
          </h2>
          <p className="text-2xl text-gray-600 mt-6">
            At Blogify, we believe that everyone has a unique story to tell and
            a valuable perspective to share. Our platform is designed to be a
            space where people from all walks of life can come together to
            express their thoughts, ideas, and experiences.
          </p>
          <div className="mt-8">
            <button className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700" onClick={handleOpenPop}>
              Join Our Community
            </button>
            <CommunitySubsription isVisible={isOpenPopup} onClose={handleClosePop} />
          </div>
        </div>
      </div>
    </div>

    // <div className="m-20">
    //   <h1 className="sm:text-2xl text-2xl font-bold my-6 text-gray-900">
    //     About Blogify
    //   </h1>
    //   <p>
    //     At Blogify, we believe that everyone has a unique story to tell and a
    //     valuable perspective to share. Our platform is designed to be a space
    //     where people from all walks of life can come together to express their
    //     thoughts, ideas, and experiences.
    //   </p>
    //   <div>
    //     <h2 className="sm:text-2xl text-2xl font-bold my-6 text-gray-900">Why Blogify?</h2>
    //     <ul>
    //       <li>
    //         Freedom of Expression: We believe in the power of free speech and
    //         encourage our users to share their authentic selves.
    //       </li>
    //       <li>
    //         Inclusive Community: Our platform is a safe and inclusive space for
    //         everyone, regardless of background or beliefs.
    //       </li>
    //       <li>
    //         Continuous Improvement: We are constantly working to improve our
    //         platform and add new features based on user feedback.
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <h2 className="sm:text-2xl text-2xl font-bold my-6 text-gray-900">Join Us on Our Journey</h2>
    //     <p>
    //       We invite you to join the Blogify community and start sharing your
    //       story today. Whether you’re a seasoned writer or just starting out,
    //       Blogify provides the tools and support you need to reach a wider
    //       audience and make an impact.
    //     </p>
    //     <button>Join</button>
    //   </div>
    // </div>
  );
};

export default About;
