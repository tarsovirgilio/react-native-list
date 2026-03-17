import { View, Text, StyleSheet } from 'react-native';

type EmptyStateProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <View style={style.row}>
      <Text>{message}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  row: {
    alignItems: 'center',
    marginTop: 40,
  },
});
