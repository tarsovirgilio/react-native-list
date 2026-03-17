import { useInfiniteQuery } from '@tanstack/react-query';

import { getUsers, searchUsers } from '../../../services/githubApi';

export function useUsers() {
  return useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) => getUsers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_, pages) => pages.length + 1,
  });
}

export function useSearchUsers(query: string) {
  return useInfiniteQuery({
    queryKey: ['searchUsers', query],
    queryFn: ({ pageParam = 1 }) => searchUsers(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (_, pages) => pages.length + 1,
    enabled: query.length > 2,
  });
}
