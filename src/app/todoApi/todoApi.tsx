import { Todo } from "../types/todo";

export const addTodo = async (newTodo: Omit<Todo, "id">) => {
  const response = await fetch("http://localhost:4000/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
  });
  return response.json();
};
