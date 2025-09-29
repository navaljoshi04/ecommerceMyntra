import mongoose from "mongoose";

export const connectWithDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("App is successfully connected with the database");
  } catch (error) {
    console.log("Error while connecting with the database: ", error);
  }
};
