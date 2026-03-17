import { User } from '../features/users/types/User';

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://api.github.com/users');

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
}

export async function getUsers(since = 0): Promise<User[]> {
  const response = await fetch(`https://api.github.com/users?since=${since}`);

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
}

export async function searchUsers(query: string, page = 1): Promise<User[]> {
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=20`,
  );

  if (!response.ok) {
    throw new Error('Failed to search users');
  }

  const data = await response.json();

  return data.items;
}
