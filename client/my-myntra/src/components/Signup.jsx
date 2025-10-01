import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    contactNumber: "",
    password: "",
  });
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState("");
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    try {
      axios.post("http://localhost:3000/api/auth/signup", formData);
      setAlertMsg("user signed up successfully");
      navigate("/login");
      setFormData({
        email: "",
        userName: "",
        contactNumber: "",
        password: "",
      });
    } catch (error) {
      console.log("Error while submitting the data", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col w-full max-w-md p-6">
        {alertMsg && (
          <div className="bg-pink-200 shadow-white px-4 py-4 rounded-md text-red-500 text-center">
            {alertMsg}
          </div>
        )}
        <img
          src="https://imgs.search.brave.com/tYzCgbaM6xmYTgvKj7yAxDAao0Vz6yhStVGl6_0l1_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS82LzIxLzI0/L2dyYXBoaWMtZGVz/aWduLWxvZ2luLWVs/ZW1lbnRzLWZvci1z/ZWN1cmUtYWNjZXNz/LUpLWnJmUEhZX3Qu/anBn"
          alt=""
          className="object-contain h-24 mx-auto mb-4"
        />
        <h2 className="font-semibold text-lg mb-6 text-center">
          SIGNUP{" "}
          <span className="text-pink-600 text-[22px] font-light">or</span> LOGIN
        </h2>

        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          {/* Contact Number */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="contact"
              className="font-poppins text-pink-600 font-medium mb-1"
            >
              Contact number
            </label>
            <input
              type="tel"
              id="contact"
              value={formData.contactNumber}
              onChange={(e) => handleChange("contactNumber", e.target.value)}
              placeholder="Enter mobile number"
              className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* User Name */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="user"
              className="font-poppins text-pink-600 font-medium mb-1"
            >
              User Name
            </label>
            <input
              type="text"
              id="user"
              value={formData.userName}
              onChange={(e) => handleChange("userName", e.target.value)}
              placeholder="Enter user name"
              className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="font-poppins text-pink-600 font-medium mb-1"
            >
              Email ID
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              id="email"
              placeholder="Enter email"
              className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4">
            <label
              htmlFor="password"
              className="font-poppins text-pink-600 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Enter password"
              className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-pink-500 text-white py-2 rounded-md font-medium hover:bg-pink-600 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
