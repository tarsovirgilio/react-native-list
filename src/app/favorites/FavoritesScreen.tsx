import { Text } from 'react-native';

import { useFavoritesStore } from '../../store/favoritesStore';
import { User } from '../../features/users/types/User';
import EmptyState from '../../shared/components/EmptyState';
import UserList from '../../features/users/components/UserList';

export default function FavoritesScreen() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  function toggleFavorite(user: User) {
    removeFavorite(user.id);
  }

  if (favorites.length === 0) {
    return <Text>No favorites yet</Text>;
  }

  return (
    <UserList
      users={favorites}
      favorites={favorites.map((f) => f.id)}
      onToggleFavorite={toggleFavorite}
      ListEmptyComponent={<EmptyState message="User not found" />}
    />
  );
}
