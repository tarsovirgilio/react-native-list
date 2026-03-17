import { memo } from 'react';
import { Image, Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { User } from '../types/User';

type UserListItemProps = {
  user: User;
  isFavorite?: boolean;
  onToggleFavorite?: (user: User) => void;
};

function UserListItem({ user, isFavorite, onToggleFavorite }: UserListItemProps) {
  function handleOpenProfile() {
    Linking.openURL(user.html_url);
  }

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.userInfo} onPress={handleOpenProfile}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <Text style={styles.name}>{user.login}</Text>
      </TouchableOpacity>

      {onToggleFavorite && (
        <Pressable onPress={() => onToggleFavorite(user)}>
          <Text style={styles.favorite}>{isFavorite ? '❌' : '⭐'}</Text>
        </Pressable>
      )}
    </View>
  );
}

export default memo(UserListItem);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
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
