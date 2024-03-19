import express from "express";

import { getAllProduct, addProcuct, getProductById } from "../Controllers/productControlls";

const router = express.Router();

// localhost:8000/todos/ GET, POST
router.route("/").get(getAllProduct).post(addProcuct);


// localhost:8000/todos/:id
router.route("/:id").get(getProductById);


export default router;