import { useTodos } from "@/hooks/queries";
import { useDeleteTodo, useToggleComplete } from "@/hooks/mutation";
import { Todo } from "../types/todo";
const TodoList = () => {
  const { data: todos } = useTodos();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: toggleTodo } = useToggleComplete();
  const handleDelete = (id: number) => {
    deleteTodo({ id });
  };

  const handleToggleComplete = ({
    id,
    completed,
  }: Pick<Todo, "id" | "completed">) => {
    toggleTodo({ id, completed });
  };

  return (
    <div className="text-white gap-4 flex flex-col ">
      {todos?.map((todo: Todo) => (
        <div key={todo.id} className="border-white rounded-md border-[2px] p-4">
          <div>제목 : {todo.title}</div>
          <div>내용 : {todo.content}</div>
          <div className="text-xl">
            완료여부 : {todo.completed ? "완료" : "미완료"}
          </div>
          <div className="gap-4 flex">
            <button
              className="border-white border-[1px] rounded-md p-2"
              onClick={() =>
                handleToggleComplete({
                  id: todo.id,
                  completed: !todo.completed,
                })
              }
            >
              {!todo.completed ? "완료" : "취소"}
            </button>
            <button
              className="border-white border-[1px] rounded-md p-2"
              onClick={() => handleDelete(todo.id)}
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
