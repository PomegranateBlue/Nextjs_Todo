import TodoListPage from "./client.page";
import { QueryClient } from "@tanstack/react-query";
import { getTodos } from "../todoApi/todoApi";

const TodosPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  return (
    <div>
      <TodoListPage />
    </div>
  );
};

export default TodosPage;
