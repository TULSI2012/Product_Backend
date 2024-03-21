import express from "express";
import cors from "cors";
import productRouters from "./Routes/productRouters"
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "10kb" }));
// Url Encoder, Allows express to parse data being sent from a form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
)

// ROUTES
app.use("/products", productRouters);


export default app;