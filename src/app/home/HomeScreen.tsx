import { Text, View } from 'react-native';

import { User } from '../../features/users/types/User';
import { useFavoritesStore } from '../../store/favoritesStore';
import SearchInput from '../../components/SearchInput';
import { useUsersController } from '../../features/users/hooks/useUsersController';
import UserList from '../../features/users/components/UserList';
import EmptyState from '../../shared/components/EmptyState';
import UserListSkeleton from '@/features/users/components/UserListSkeleton';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

export default function HomeScreen() {
  const { search, setSearch, users, isLoading, fetchNextPage, hasNextPage, isError } =
    useUsersController();
  const isConnected = useNetworkStatus();

  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  function toggleFavorite(user: User) {
    const isFavorite = favorites.some((favorite: User) => favorite.id === user.id);

    if (isFavorite) {
      removeFavorite(user.id);
    } else {
      addFavorite(user);
    }
  }

  if (isError) {
    return <Text>Erro ao carregar usuários</Text>;
  }

  const uniqueUsers = Array.from(new Map(users.map((user) => [user.id, user])).values());

  return (
    <View>
      {!isConnected && <Text style={{ color: 'red' }}>Você está offline</Text>}
      <SearchInput value={search} onChange={setSearch} />
      {uniqueUsers.length === 0 && isLoading ? (
        <UserListSkeleton />
      ) : (
        <UserList
          users={uniqueUsers}
          favorites={favorites.map((f) => f.id)}
          onToggleFavorite={toggleFavorite}
          onEndReached={() => {
            if (hasNextPage && isConnected) fetchNextPage();
          }}
          ListEmptyComponent={<EmptyState message="User not found" />}
        />
      )}
    </View>
  );
}
