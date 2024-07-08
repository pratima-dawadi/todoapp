import { todo } from "node:test";
import { ITodos } from "../interfaces/todo";

const todolist = [
  {
    id: 1,
    name: "Learn Node",
    description: "Learn Node.js and express",
    status: "completed",
  },
  {
    id: 2,
    name: "Learn React",
    description: "Learn React.js",
    status: "completed",
  },
];

export function listTodos() {
  return todolist;
}

export function getIdFromModel(id: string) {
  return todolist.find((todo) => todo.id === Number(id));
}

export function createTodos(body: ITodos) {
  const addTodo = {
    id: todolist.length + 1,
    name: body.name,
    description: body.description,
    status: body.status,
  };
  todolist.push(addTodo);
  return addTodo;
}

export function updateTodos(id: number, body: ITodos) {
  const index = todolist.findIndex((todo) => todo.id === id);
  if (index === -1) return null;
  const updatedTodo = {
    id,
    name: body.name,
    description: body.description,
    status: body.status,
  };

  todolist[index] = updatedTodo;
  return updatedTodo;
}

export function deleteTodo(id: number) {
  const index = todolist.findIndex((todo) => todo.id === id);
  if (index === -1) return null;

  const deletedTodo = todolist.splice(index, 1);
  return deletedTodo[0];
}
