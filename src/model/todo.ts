const todolist = [
  {
    id: 1,
    name: "Learn Node",
    description: "Learn Node.js and express",
  },
  {
    id: 2,
    name: "Learn React",
    description: "Learn React.js",
  },
];

export function listTodos() {
  return todolist;
}

export function getIdFromModel(id: string) {
  return todolist.find((todo) => todo.id === Number(id));
}
