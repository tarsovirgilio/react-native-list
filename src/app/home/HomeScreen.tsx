import { useUsers } from "../../features/users/hooks/useUsers";
import { User } from "../../features/users/types/User";
import { useFavoritesStore } from "../../store/favoritesStore";

import { Text, ActivityIndicator } from "react-native";
import UserList from "../../features/users/components/UserList";

export default function HomeScreen() {
  const { data, isLoading, error } = useUsers();

  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  console.log(data)

  function toggleFavorite(user: User) {
    const isFavorite = favorites.some((favorite: User) => favorite.id === user.id)

    if (isFavorite) {
      removeFavorite(user.id)
    } else {
      addFavorite(user)
    }
  }

  if (isLoading) return <ActivityIndicator size="large" />;

  if (error) return <Text>Error ao carregar usuarios</Text>

  return (
    <UserList 
      users={data ?? []}
      favorites={favorites.map((f) => f.id)}
      onToggleFavorite={toggleFavorite}
    />
  );
}