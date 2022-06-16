/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';

import SkeletonChallengeItem from './SkeletonChallengeItem';
type Props = {
  itemCount: number;
};

const Loading: React.FC<Props> = ({itemCount}) => {
  const loadingList = Array.from({length: itemCount}, (_, i) => i.toString());
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 12;
  const numColumns = 2;

  return (
    <ChallengeFlatList
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: gap,
      }}
      data={loadingList}
      onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
      renderItem={() => (
        <SkeletonChallengeItem
          itemWidth={(containerWidth - gap) / numColumns}
        />
      )}
      keyExtractor={item => item}
    />
  );
};

export default Loading;

const ChallengeFlatList = styled(
  FlatList as new (props: FlatListProps<string>) => FlatList<string>,
)`
  flex: 1;
  margin: 12px 24px;
  height: 100%;
`;
