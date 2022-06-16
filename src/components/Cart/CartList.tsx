import React, {useState} from 'react';
import {FlatList, FlatListProps, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {useGetQueryState} from '../../hooks/useQueryClientStore';
import {RootState} from '../../store';
import {ChallengeItemType} from '../../types/challengeItem';
import {trim} from '../../utils/type';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const emptyText = ' 장바구니에 담긴 챌린지가 없어요!';
  const challengeList = useGetQueryState<ChallengeItemType[]>([
    'challengeList',
    undefined,
  ]);

  const cartItems = useSelector<RootState, ChallengeItemType[] | undefined>(
    state =>
      challengeList
        ? state.cartItems.value
            .map(id => challengeList.find(item => item.id === id))
            .filter(trim)
        : undefined,
  );
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
          data={cartItems}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => (
            <CartItem itemWidth={containerWidth} {...item} />
          )}
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
