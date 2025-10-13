import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const { user, isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    console.log("Auth state changed:", {
      user,
      isAuthenticated,
      error,
      loading,
    });
  }, [user, isAuthenticated, error, loading]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        loginUser({ email: formData.email, password: formData.password })
      );

      if (loginUser.fulfilled.match(resultAction)) {
        console.log("User logged in:", resultAction.payload.user);
        navigate("/");
      } else if (loginUser.rejected.match(resultAction)) {
        console.log("Login error:", resultAction.payload);
      }
    } catch (error) {
      console.log("Error while login in myntra: ", error);
    }
  };
  return (
    <div className="bg-blue-50 min-h-screen mt-16 grid ">
      <div className="shadow-white m-12  bg-pink-100 w-3/5 justify-self-center rounded-md">
        <div className="mt-8">
          <div className="text-center my-6">
            <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
              Login
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              If visiting for the first time,{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-600 font-medium cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </div>

          {error && (
            <div className="bg-blue-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-8 mt-4">
              {error}
            </div>
          )}
          {loading && (
            <div className="text-center text-blue-600 mt-4">Loading...</div>
          )}
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
