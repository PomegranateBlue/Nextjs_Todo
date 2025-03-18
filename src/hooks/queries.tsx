import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/app/todoApi/todoApi";
export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
