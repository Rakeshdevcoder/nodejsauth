import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log("Error connection to MongoDB ", error.message);
    process.exit(1);
  }
};
