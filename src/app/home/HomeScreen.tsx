import { User } from "../../features/users/types/User";
import { useFavoritesStore } from "../../store/favoritesStore";

import { ActivityIndicator, View } from "react-native";
import SearchInput from "../../components/SearchInput";
import { useUsersController } from "../../features/users/hooks/useUsersController";
import UserList from "../../features/users/components/UserList";
import EmptyState from "../../shared/components/EmptyState";

export default function HomeScreen() {
  const { search, setSearch, users, isLoading, fetchNextPage, hasNextPage } =
    useUsersController()

  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  function toggleFavorite(user: User) {
    const isFavorite = favorites.some((favorite: User) => favorite.id === user.id)

    if (isFavorite) {
      removeFavorite(user.id)
    } else {
      addFavorite(user)
    }
  }

  if (isLoading) return <ActivityIndicator size="large" />;

  console.log('users: ', users);

  return (
    <View>
      <SearchInput value={search} onChange={setSearch} />
      <UserList 
        users={users}
        favorites={favorites.map((f) => f.id)}
        onToggleFavorite={toggleFavorite}
        onEndReached={() => {
          if (hasNextPage) fetchNextPage()
        }}
        ListEmptyComponent={<EmptyState message="User not found"/>}
      />
    </View>
  );
}