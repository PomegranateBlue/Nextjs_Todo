"use client";

import { Todo } from "../types/todo";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { addTodo } from "../todoApi/todoApi";
const TodosPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ title, content, completed: false });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="제목을 입력하세요"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          placeholder="할 일을 입력하세요"
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="text-white">
            <div>제목 : {todo.title}</div>
            <div>내용 : {todo.content}</div>
            <div>완료여부 : {todo.completed ? "완료" : "미완료"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosPage;
