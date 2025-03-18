import { useTodos } from "@/hooks/queries";
import { useDeleteTodo } from "@/hooks/mutation";
import { Todo } from "../types/todo";
const TodoList = () => {
  const { data: todos } = useTodos();
  const { mutate: deleteTodo } = useDeleteTodo();
  const handleDelete = (id: number) => {
    deleteTodo({ id });
  };

  console.log(todos);
  return (
    <div className="text-white gap-4 flex flex-col ">
      {todos?.map((todo: Todo) => (
        <div key={todo.id} className="border-white rounded-md border-[2px] p-4">
          <div>제목 : {todo.title}</div>
          <div>내용 : {todo.content}</div>
          <div>완료여부 : {todo.completed ? "완료" : "미완료"}</div>
          <div className="gap-4 flex">
            <button>완료</button>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
