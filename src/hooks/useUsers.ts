import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/apiClient";

export const useUsers = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => (await api.get("/users")).data,
  });

  // Update user
  const updateMutation = useMutation({
    mutationFn: ({ id, userData }: { id: string; userData: unknown }) =>
      api.patch(`/users/${id}`, userData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }), // Refetch after update
  });

  const useUsers = () => {
    return useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const response = await api.get("/users");
        return response.data;
      },
    });
  };

  return { data, isLoading, updateMutation, useUsers };
};
