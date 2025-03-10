import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

// useMutation, useQueryClient

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/users");
      return data;
    },
  });
};
