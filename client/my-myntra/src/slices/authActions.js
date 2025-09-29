import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "/auth/registerUser",
  async ({ email, password, userName }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
        userName,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  }
);
