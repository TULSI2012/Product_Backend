import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

const PORT: string | number = process.env.PORT ?? 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});