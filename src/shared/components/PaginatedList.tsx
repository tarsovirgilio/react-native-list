import React from 'react';
import { FlatList, ActivityIndicator, ListRenderItem } from 'react-native';

type PaginatedListProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: () => string;
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
  ListEmptyComponent: React.JSX.Element;
};

export default function PaginatedList<T>({
  data,
  renderItem,
  keyExtractor,
  onEndReached,
  isFetchingNextPage,
  ListEmptyComponent,
}: PaginatedListProps<T>) {
  return (
    <FlatList<T>
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
}
