import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  const { userName, email, contactNumber, password } = req.body;
  if (!userName || !email || !contactNumber || !password) {
    return res.status(401).json({ message: "All fields are required .." });
  }

  const checkIfEmailExists = await userModel.findOne({ email });
  if (checkIfEmailExists) {
    return res.status(401).json({ message: "User already exists.." });
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new userModel({
    userName,
    email,
    contactNumber,
    password: hashedPassword,
  });
  await user.save();
  return res.status(200).json({
    message: "Signup is successfull..",
    user: { email, userName },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("req body", req.body);
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required .." });
  }
  console.log(email, password, "Email and password ");
  const checkIfUserExist = await userModel.findOne({ email });
  if (!checkIfUserExist) {
    return res.status(401).json({ message: "Invalid credentials...." });
  }
  const checkPassword = await bcrypt.compare(
    password,
    checkIfUserExist.password
  );
  if (!checkPassword) {
    return res.status(401).json({ message: "Invalid credentials...." });
  }
  console.log("check pass", checkPassword);
  const token = jwt.sign(
    {
      email: checkIfUserExist.email,
      _id: checkIfUserExist._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  console.log("token", token);
  res.cookie("token", token);
  return res.status(200).json({
    message: "Logged in successfully ...",
    token,
    user: {
      email: checkIfUserExist.email,
      userName: checkIfUserExist.userName,
    },
  });
};

const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
};

export { signup, login, logout };
