import React, {useState} from 'react';
import {
  FlatList,
  FlatListProps,
  LayoutRectangle,
  ListRenderItem,
} from 'react-native';
import {StyledComponent} from 'styled-components';
import styled, {DefaultTheme} from 'styled-components/native';

type Props<T> = {
  renderItem: (itemWidth: number) => ListRenderItem<T>;
  data: T[];
  numColumns: number;
  keyExtractor: (item: T) => string;
  gap?: number;
};

export interface LayoutChangeEvent {
  nativeEvent: {
    layout: LayoutRectangle;
  };
}

function GridList<H>({
  data,
  gap = 0,
  numColumns,
  renderItem,
  keyExtractor,
}: Props<H>) {
  const [containerWidth, setContainerWidth] = useState(0);
  const itemWidth = (containerWidth - gap) / numColumns;
  const inlineStyle =
    numColumns === 1
      ? ''
      : {
          contentContainerStyle: {
            justifyContent: 'space-between',
          },
          columnWrapperStyle: {
            justifyContent: 'space-between',
            marginBottom: gap,
          },
        };
  return (
    <>
      {data && (
        <CustomFlatList<
          StyledComponent<
            new (props: FlatListProps<H>) => FlatList<H>,
            DefaultTheme,
            {},
            never
          >
        >
          {...inlineStyle}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          data={data}
          onLayout={(e: LayoutChangeEvent) =>
            setContainerWidth(e.nativeEvent.layout.width)
          }
          renderItem={renderItem(itemWidth)}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
}
export default GridList;

const CustomFlatList = styled(FlatList)`
  flex: 1;
  margin: 12px 24px;
  height: 100%;
`;
