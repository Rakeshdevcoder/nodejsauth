import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: ".env.local" });
const app = express();

const PORT = process.env.PORT || 3001;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);



app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on http://localhost:${PORT}`);
});

export default app;
