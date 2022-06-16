import React, {useCallback} from 'react';
import {ListRenderItem, Text} from 'react-native';
import {useStore} from 'react-redux';
import styled from 'styled-components/native';

import useGetChallengeFilterByReduxStoreId from '../../hooks/useGetChallengeFilterByReduxStoreId';
import {RootState} from '../../store';
import {ChallengeItemType} from '../../types/challengeItem';
import GridList from '../common/GridList';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const cartItems = useGetChallengeFilterByReduxStoreId('cartItems');
  const store = useStore<RootState>();
  const {attendChallenges: attendChallengeIds} = store.getState();

  const renderItem: (itemWidth: number) => ListRenderItem<ChallengeItemType> =
    useCallback(
      itemWidth =>
        ({item}) =>
          (
            <CartItem
              itemWidth={itemWidth}
              isAttend={attendChallengeIds.value.includes(item.id)}
              {...item}
            />
          ),
      [attendChallengeIds.value],
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
    <GridList<ChallengeItemType>
      data={cartItems}
      renderItem={renderItem}
      numColumns={1}
    />
  );
};

const CartEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default CartList;
