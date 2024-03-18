import express from "express";

// import todoRouter from "./Routes/todosRouters";
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

// ROUTES
// localhost:8000/todos
// app.use("/todos", todoRouter);


export default app;