import { Todo } from "../types/todo";

const TODO_URL = "http://localhost:4000/todos";

export const getTodos = async () => {
  const response = await fetch(`${TODO_URL}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("getTodo error!");
  }
  return data;
};

export const addTodo = async (newTodo: Omit<Todo, "id">) => {
  const response = await fetch(`${TODO_URL}`, {
    method: "POST",
    body: JSON.stringify(newTodo),
  });
  const data = await response.json();
  return data;
};

export const deleteTodo = async (id: Pick<Todo, "id">) => {
  const response = await fetch(`${TODO_URL}/${id}`, {
    method: "DELETE",
  });
  const data = response.json();
  return data;
};
