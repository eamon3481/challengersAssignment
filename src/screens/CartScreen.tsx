import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {useGetQueryState} from '../hooks/useQueryClientStore';
import {RootState} from '../store';
import {ChallengeItemType} from '../types/challengeItem';

const CartScreen: React.FC = () => {
  const challengeList = useGetQueryState<ChallengeItemType[]>([
    'challengeList',
    undefined,
  ]);

  const cartItems = useSelector<RootState>(state =>
    state.cartItems.value.map(id =>
      challengeList ? challengeList.find(item => item.id === id) : [],
    ),
  );
  console.log(cartItems);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>카트</Text>
    </View>
  );
};

export default CartScreen;
