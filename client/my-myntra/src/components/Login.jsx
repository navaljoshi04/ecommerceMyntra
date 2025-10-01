import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        formData,
        {
          withCredentials: true,
        }
      );
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log("logged in user:", user);
      navigate("/");
    } catch (error) {
      console.log("Error while login in myntra: ", error);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <div className="bg-blue-50 min-h-screen mt-16 grid ">
      <div className="shadow-white m-12  bg-pink-100 w-3/5 justify-self-center rounded-md">
        <div className="mt-8">
          <h2 className="text-center font-bold text-[22px] ">LOGIN</h2>
          <form
            action=""
            onSubmit={handleLogin}
            className="mt-12 border border-red-500 w-4/5 mx-auto h-78 shadow shadow-pink-600"
          >
            <div>
              <label
                htmlFor="email"
                className="px-4 py-2 font-light text-[18px] ml-8 mt-12"
              >
                Email:
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="border w-2/4 rounded-md border-blue-700 mt-12 px-4 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="px-4 py-2 font-light text-[18px] ml-8 mt-12"
              >
                Pass:
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="border w-2/4 rounded-md border-blue-700 mt-12 px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-4 w-2/6 text-center ml-34 mt-8 bg-green-400 shadow shadow-fuchsia-400 h-12 hover:cursor-pointer hover:bg-green-500 hover:text-white"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
