import React, {useCallback, useState} from 'react';
import {FlatList, FlatListProps, ListRenderItem, Text} from 'react-native';
import {useStore} from 'react-redux';
import styled from 'styled-components/native';

import useGetChallengeFilterByReduxStoreId from '../../hooks/useGetChallengeFilterByReduxStoreId';
import {RootState} from '../../store';
import {ChallengeItemType} from '../../types/challengeItem';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const cartItems = useGetChallengeFilterByReduxStoreId('cartItems');
  const store = useStore<RootState>();
  const {attendChallenges: attendChallengeIds} = store.getState();

  const renderItem: ListRenderItem<ChallengeItemType> = useCallback(
    ({item}) => (
      <CartItem
        itemWidth={containerWidth}
        isAttend={attendChallengeIds.value.includes(item.id)}
        {...item}
      />
    ),
    [attendChallengeIds.value, containerWidth],
  );

  const emptyText = ' 장바구니에 담긴 챌린지가 없어요!';
  if (!cartItems || cartItems.length === 0) {
    return (
      <CartEmpty>
        <Text>{emptyText}</Text>
      </CartEmpty>
    );
  }

  return (
    <>
      {
        <ChallengeFlatList
          showsVerticalScrollIndicator={false}
          disableVirtualization={false}
          data={cartItems}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      }
    </>
  );
};

const CartEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ChallengeFlatList = styled(
  FlatList as new (
    props: FlatListProps<ChallengeItemType>,
  ) => FlatList<ChallengeItemType>,
)`
  flex: 1;
  margin: 12px 24px;
  height: 100%;
`;

export default CartList;
