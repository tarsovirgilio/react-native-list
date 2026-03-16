import { ComponentType, useCallback } from "react"
import UserListItem from "./UserListItem"
import { User } from "../types/User";
import { ListRenderItem, ListRenderItemInfo } from "react-native";
import PaginatedList from "../../../shared/components/PaginatedList";

type UserListProps = {
    users: User[];
    favorites?: number[];
    onToggleFavorite?: (user: User) => void;
    onEndReached?: () => void;
    isFetchingNextPage?: boolean;
    ListEmptyComponent: React.JSX.Element;
}

export default function UserList({
  users,
  favorites,
  onToggleFavorite,
  onEndReached,
  isFetchingNextPage,
  ListEmptyComponent
}: UserListProps) {

  const renderItem: ListRenderItem<User>= useCallback(
    ({ item }) => (
      <UserListItem
        user={item}
        isFavorite={favorites?.includes(item.id)}
        onToggleFavorite={onToggleFavorite}
      />
    ),
    [favorites, onToggleFavorite]
  )

  return (
    <PaginatedList<User>
        data={users}
        keyExtractor={(item) => `${item.node_id}_${item.id}_${item.login}`}
        renderItem={renderItem}
        onEndReached={onEndReached}
        isFetchingNextPage={isFetchingNextPage}
        ListEmptyComponent={ListEmptyComponent}
    />
  )
}