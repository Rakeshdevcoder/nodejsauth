import express from "express";

import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config({ path: ".env.local" });
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on http://localhost:${PORT}`);
});

export default app;
