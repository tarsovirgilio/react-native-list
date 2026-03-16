import { View, Text } from "react-native"

type EmptyStateProps = {
    message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <Text>{message}</Text>
    </View>
  )
}