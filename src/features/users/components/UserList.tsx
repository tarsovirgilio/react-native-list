import React, { useCallback } from 'react';
import { ListRenderItem } from 'react-native';

import UserListItem from './UserListItem';
import { User } from '../types/User';
import PaginatedList from '../../../shared/components/PaginatedList';

type UserListProps = {
  users: User[];
  favorites?: number[];
  onToggleFavorite?: () => void;
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
  const renderItem: ListRenderItem<User> = useCallback(
    ({ item }) => (
      <UserListItem
        user={item}
        isFavorite={favorites?.includes(item.id)}
        onToggleFavorite={onToggleFavorite}
      />
    ),
    [favorites, onToggleFavorite],
  );

  return (
    <PaginatedList<User>
      data={users}
      keyExtractor={(item) => `${item.node_id}_${item.id}_${item.login}`}
      renderItem={renderItem}
      onEndReached={onEndReached}
      isFetchingNextPage={isFetchingNextPage}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}
