// src/hooks/useAuth.ts
import { useMutation } from "@tanstack/react-query";
import api from "../api/apiClient";

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const { data } = await api.post("/login", { username, password });
      localStorage.setItem("token", data.token);
      return data;
    },
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
