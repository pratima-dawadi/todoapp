import { getIdFromModel } from "../model/todo";

export function checkId(id: string) {
  const todoId = getIdFromModel(id);

  if (!todoId) {
    throw new Error("Id not found");
  }

  return todoId;
}
