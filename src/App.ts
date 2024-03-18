import express from "express";

import productRouters from "./Routes/productRouters"
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));

// ROUTES
// localhost:8000/todos
app.use("/product", productRouters);


export default app;