import React, {useState} from 'react';
import {FlatList, FlatListProps, Text} from 'react-native';
import styled from 'styled-components/native';

import CartItem from '../components/Cart/CartItem';
import useGetChallengeFilterByReduxStoreId from '../hooks/useGetChallengeFilterByReduxStoreId';
import {ChallengeItemType} from '../types/challengeItem';

const ChallengeCertificationScreen: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  const attendChallenges =
    useGetChallengeFilterByReduxStoreId('attendChallenges');

  const emptyText = '참가 중인 챌린지가 없어요';

  if (!attendChallenges || attendChallenges.length === 0) {
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
          data={attendChallenges}
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

export default ChallengeCertificationScreen;
