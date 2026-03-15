import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../services/githubApi";
import { User } from "../types/User";

export function useUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}