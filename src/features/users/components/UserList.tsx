import React, { useCallback } from 'react';
import { ListRenderItem } from 'react-native';

import UserListItem from './UserListItem';
import { User } from '../types/User';
import PaginatedList from '../../../shared/components/PaginatedList';
import UserListSkeleton from './UserListSkeleton';

type UserListProps = {
  users: User[];
  favorites?: number[];
  onToggleFavorite?: (user: User) => void;
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
  ListEmptyComponent: React.JSX.Element;
};

export default function UserList({
  users,
  favorites,
  onToggleFavorite,
  onEndReached,
  isFetchingNextPage,
  ListEmptyComponent,
}: UserListProps) {
  const favoritesSet = new Set(favorites);

  const renderItem: ListRenderItem<User> = useCallback(
    ({ item }) => {
      return (
        <UserListItem
          user={item}
          isFavorite={favoritesSet.has(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      );
    },
    [favorites, onToggleFavorite],
  );

  return (
    <PaginatedList<User>
      data={users}
      keyExtractor={(item) => `${item.node_id}_${item.id}_${item.login}`}
      renderItem={renderItem}
      onEndReached={onEndReached}
      isFetchingNextPage={isFetchingNextPage}
      ListFooterComponent={<UserListSkeleton />}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}
