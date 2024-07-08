import express from "express";
import {
  deleteTodos,
  getTodos,
  postTodos,
  putTodos,
  getTodosById,
} from "../controller/todo";

const router = express();

router.get("/", getTodos);

router.get("/:id", getTodosById);

router.post("/", postTodos);

router.put("/:id", putTodos);

router.delete("/:id", deleteTodos);

export default router;
