import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../utilities/userContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const togleDropDownOpen = () => setIsDropDownOpen(!isDropDownOpen);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogoutClick = () => {
    logOut();
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy="true" smooth="true" to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home{" "}
            </li>
          </Link>
          <Link spy="true" smooth="true" to="/about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link spy="true" smooth="true" to="/article-list">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Articles{" "}
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="sticky top-0">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Blogify</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy="true" smooth="true" to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border:fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy="true" smooth="true" to="/about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border:fuchsia-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy="true" smooth="true" to="/article-list">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border:fuchsia-600 cursor-pointer">
                  Articles
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-x-1">
            {user ? (
              <div className="flex">
                <span>{user.username}</span>

                <FaUserCircle
                  size={24}
                  className="ml-2 cursor-pointer"
                  onClick={togleDropDownOpen}
                />
                {isDropDownOpen && (
                  <div className="absolute right-10 mt-7 w-48 bg-white border rounded-lg shadow-lg">
                    <ul>
                      <li
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                        onClick={handleLogoutClick}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-1">
                <button
                  className="hidden lg:inline-block bg-white text-gray-900 border border-gray-300 rounded px-4 py-1"
                  onClick={handleLoginClick}
                >
                  <span>Login</span>
                </button>
                <button
                  className="hidden lg:inline-block  bg-gray text-white-900 border border-gray-300 rounded px-4 py-1"
                  onClick={handleSignUpClick}
                >
                  <span>Signup</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
