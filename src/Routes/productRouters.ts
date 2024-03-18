import express from "express";

import { getAllProduct, addProcuct } from "../Controllers/productControlls";

const router = express.Router();

// localhost:8000/todos/ GET, POST
router.route("/").get(getAllProduct).post(addProcuct);

// localhost:8000/todos/:id
// router.route("/:id").get(getAllTodos);

export default router;