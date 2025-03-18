import { useAddTodo } from "@/hooks/mutation";
import { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate: addTodo } = useAddTodo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ title, content, completed: false });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-black"
        type="text"
        value={title}
        placeholder="title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="text-black"
        type="text"
        value={content}
        placeholder="content"
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="border-[2px] gap-2 p-2 rounded-md">
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
