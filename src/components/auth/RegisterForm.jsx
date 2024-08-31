import React, { useState } from "react";
import IMG from "../../assets/images/undraw_Authentication_re_svpt.png";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/users";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const username = formData.username;
    const email = formData.email;
    const password = formData.password;

    try {
      const data = await registerUser({ username, email, password });
      navigate("/login");
    } catch (err) {
      console.error("Register error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div
      className="bg-gray-100 flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 76px)" }}
    >
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="sm:w-1/2 px-16">
          <h2 className="text-4xl font-bold flex justify-center items-center">
            Sign Up
          </h2>
          <p className="text-sm text-gray mt-4">
            If you already a member, easily log in
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className=" p-2 mt-8 rounded-xl border"
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
            <div className="relative">
              <input
                className="p-2  rounded-xl border w-full"
                placeholder="password"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              className="p-2 text-white bg-slate-900 rounded-xl border"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="w-1/2">
          <img className="sm:block hidden rounded-2xl" src={IMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
