import { StyleSheet, TextInput } from 'react-native';

type SearchInputProps = {
  value: string;
  onChange: () => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search github users..."
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#666',
    padding: 12,
    margin: 16,
    borderRadius: 8,
  },
});
