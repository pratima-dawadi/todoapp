import { Request, Response } from "express";
import { listTodos } from "../model/todo";
import { checkId } from "../service/todo";

export function getTodos(req: Request, res: Response) {
  const data = listTodos();
  res.json(data);
}

export function getTodosById(req: Request, res: Response) {
  const { id } = req.params;
  const data = checkId(id);
  console.log(data);
  res.json(data);
}

export function postTodos(req: Request, res: Response) {
    const {body} = req;
    console.log(`User sent: ${body}`);

}

export function putTodos(req: Request, res: Response) {
  res.send("PUT todos");
}

export function deleteTodos(req: Request, res: Response) {
  res.send("DELETE todos");
}
