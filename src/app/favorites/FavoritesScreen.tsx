import { View, Text } from "react-native";
import UserList from "../../features/users/components/UserList";
import { useFavoritesStore } from "../../store/favoritesStore";
import { User } from "../../features/users/types/User";

export default function FavoritesScreen() {
  const favorites = useFavoritesStore((state) => state.favorites)
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite)

  function toggleFavorite(user: User) {
    removeFavorite(user.id)
  }

  console.log("favorites", favorites);

  if (favorites.length === 0) {
    return <Text>No favorites yet</Text>
  }

  return (
    <UserList
      users={favorites}
      favorites={favorites.map((f) => f.id)}
      onToggleFavorite={toggleFavorite}
    />
  )
}