import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { User } from '../types/User';

type UserListItemProps = {
  user: User;
  isFavorite?: boolean;
  onToggleFavorite?: (user: User) => void;
};

export default function UserListItem({ user, isFavorite, onToggleFavorite }: UserListItemProps) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />

      <Text style={styles.name}>{user.login}</Text>

      {onToggleFavorite && (
        <Pressable onPress={() => onToggleFavorite(user)}>
          <Text style={styles.favorite}>{isFavorite ? '❌' : '⭐'}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  favorite: {
    fontSize: 20,
  },
});
