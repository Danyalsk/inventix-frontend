import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { UserData } from "../types/users";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/users");
      return data;
    },
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: UserData) => {
      const { data } = await axiosInstance.post("/create-user", userData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Refresh user list
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });
};
