import { ITodos } from "../interfaces/todo";
import { getIdFromModel } from "../model/todo";
import * as TodoModel from "../model/todo";

export function checkId(id: string) {
  const todoId = getIdFromModel(id);

  if (!todoId) {
    return {
      error: `Todo with id ${id} not found`,
    };
  }

  return todoId;
}

export function createTodos(body: ITodos) {
  TodoModel.createTodos(body);
}

export function updateTodos(id: string, body: ITodos) {
  const updatedToDo = TodoModel.updateTodos(Number(id), body);
  if (!updatedToDo) {
    return {
      error: `Todo with id ${id} not found`,
    };
    return updatedToDo;
  }
}

export function removeTodos(id: number) {
  const deletedTodo = TodoModel.deleteTodo(id);
  if (!deletedTodo) {
    return {
      error: `Todo with id ${id} not found`,
    };
  }
  return deletedTodo;
}
