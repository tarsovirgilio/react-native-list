import React from 'react';
import { FlatList, ActivityIndicator, ListRenderItem } from 'react-native';

type PaginatedListProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: any) => string;
  onEndReached?: () => void;
  isFetchingNextPage?: boolean;
  ListFooterComponent: React.JSX.Element;
  ListEmptyComponent: React.JSX.Element;
  isRefreshing?: boolean;
  onRefresh?: () => void;
};

export default function PaginatedList<T>({
  data,
  renderItem,
  keyExtractor,
  onEndReached,
  isFetchingNextPage,
  ListFooterComponent = <ActivityIndicator />,
  ListEmptyComponent,
  isRefreshing,
  onRefresh,
}: PaginatedListProps<T>) {
  return (
    <FlatList<T>
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onEndReached={() => {
        if (!isFetchingNextPage) {
          onEndReached?.();
        }
      }}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={isFetchingNextPage ? ListFooterComponent : null}
      getItemLayout={(_, index) => ({
        length: 80,
        offset: 80 * index,
        index,
      })}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
}
