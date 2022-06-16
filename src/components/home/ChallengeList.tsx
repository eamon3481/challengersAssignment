/* eslint-disable react-native/no-inline-styles */

import React, {useCallback, useState} from 'react';
import {FlatList, FlatListProps, ListRenderItem} from 'react-native';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {challengeAPI} from '../../api';
import {RootState} from '../../store';
import {CategoryType, ChallengeItemType} from '../../types/challengeItem';
import HomeItem from './HomeItem';

type Props = {
  category?: CategoryType;
};

const ChallengeList: React.FC<Props> = ({category}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const cartList = useSelector<RootState, number[]>(
    state => state.cartItems.value,
  );

  const gap = 12;
  const numColumns = 2;

  const {data} = useQuery<ChallengeItemType[]>(
    ['challengeList', category],
    () =>
      challengeAPI
        .reqChallengeList(category)
        .then(res => res.data.data.challenges),
  );

  const renderItem: ListRenderItem<ChallengeItemType> = useCallback(
    ({item}) => (
      <HomeItem
        isCart={cartList.includes(item.id)}
        itemWidth={(containerWidth - gap) / numColumns}
        {...item}
      />
    ),
    [cartList, containerWidth],
  );

  return (
    <>
      {data && (
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
          data={data}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  );
};
export default React.memo(ChallengeList);

const ChallengeFlatList = styled(
  FlatList as new (
    props: FlatListProps<ChallengeItemType>,
  ) => FlatList<ChallengeItemType>,
)`
  flex: 1;
  margin: 12px 24px;
  height: 100%;
`;
