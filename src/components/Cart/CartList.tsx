import React, {useCallback} from 'react';
import {ListRenderItem, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {RootState} from '../../store';
import GridList from '../common/GridList';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const {attendChallenges: attendChallengeIds, cartItems} = useSelector<
    RootState,
    RootState
  >(state => state);

  const renderItem: (itemWidth: number) => ListRenderItem<number> = useCallback(
    itemWidth =>
      ({item}) =>
        (
          <CartItem
            itemWidth={itemWidth}
            isAttend={attendChallengeIds.value.includes(item)}
            id={item}
          />
        ),
    [attendChallengeIds.value],
  );

  const emptyText = ' 장바구니에 담긴 챌린지가 없어요!';
  if (!cartItems.value || cartItems.value.length === 0) {
    return (
      <CartEmpty>
        <Text>{emptyText}</Text>
      </CartEmpty>
    );
  }
  return (
    <GridList<number>
      data={cartItems.value}
      renderItem={renderItem}
      numColumns={1}
      keyExtractor={id => id.toString()}
    />
  );
};

const CartEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default CartList;
