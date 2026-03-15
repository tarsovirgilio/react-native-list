import { User } from "../features/users/types/User";

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://api.github.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}