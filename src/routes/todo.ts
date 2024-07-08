import express from "express";
import {
  deleteTodos,
  getTodos,
  postTodos,
  putTodos,
  getTodosById,
} from "../controller/todo";

const router = express();

router.get("/todo", getTodos);

router.get("/todo/:id", getTodosById);

router.post("/todo", postTodos);

router.put("/todo/:id", putTodos);

router.delete("/todo/:id", deleteTodos);

export default router;
