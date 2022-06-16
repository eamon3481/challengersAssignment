import React, {useState} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {useGetQueryState} from '../../hooks/useQueryClientStore';
import {RootState} from '../../store';
import {ChallengeItemType} from '../../types/challengeItem';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const challengeList = useGetQueryState<ChallengeItemType[]>([
    'challengeList',
    undefined,
  ]);

  function trim<T>(v: T | undefined): v is T {
    return v !== undefined;
  }

  const cartItems = useSelector<RootState, ChallengeItemType[] | undefined>(
    state =>
      challengeList
        ? state.cartItems.value
            .map(id => challengeList.find(item => item.id === id))
            .filter(trim)
        : undefined,
  );
  const gap = 0;
  const numColumns = 1;

  return (
    <>
      {cartItems && (
        <ChallengeFlatList
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          data={cartItems}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => (
            <CartItem
              itemWidth={(containerWidth - gap) / numColumns}
              {...item}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  );
};

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
