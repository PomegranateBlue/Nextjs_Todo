import { addTodo, deleteTodo, toggleCompleteTodo } from "@/app/todoApi/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useToggleComplete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleCompleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
