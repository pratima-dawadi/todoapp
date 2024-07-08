import { Request, Response } from "express";
import { listTodos } from "../model/todo";
import {
  checkId,
  createTodos,
  removeTodos,
  updateTodos,
} from "../service/todo";

export function getTodos(req: Request, res: Response) {
  const data = listTodos();
  res.json(data);
}

export function getTodosById(req: Request, res: Response) {
  const { id } = req.params;
  const data = checkId(id);
  res.json(data);
}

export function postTodos(req: Request, res: Response) {
  const { body } = req;
  if (!body.name || !body.description || !body.status) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  createTodos(body);
  res.json(body);
}

export function putTodos(req: Request, res: Response) {
  const id = req.params.id;
  const { body } = req;
  const updatedData = updateTodos(id, body);
  res.send(`Updated todo: ${JSON.stringify(body)}`);
}

export function deleteTodos(req: Request, res: Response) {
  const { id } = req.params;
  const deletedTodo = removeTodos(Number(id));
  res.send(`Deleted todo: ${JSON.stringify(deletedTodo)}`);
}
