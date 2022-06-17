import React, {useCallback} from 'react';
import {ListRenderItem, Text} from 'react-native';
import styled from 'styled-components/native';

import CertificationItem from '../components/ChallengeCertification/CertificationItem';
import GridList from '../components/common/GridList';
import useGetChallengeFilterByReduxStoreId from '../hooks/useGetChallengeFilterByReduxStoreId';
import {ChallengeItemType} from '../types/challengeItem';

const ChallengeCertificationScreen: React.FC = () => {
  const attendChallenges =
    useGetChallengeFilterByReduxStoreId('attendChallenges');

  const renderItem: (itemWidth: number) => ListRenderItem<ChallengeItemType> =
    useCallback(
      itemWidth =>
        ({item}) =>
          <CertificationItem itemWidth={itemWidth} {...item} />,
      [],
    );

  const emptyText = '참가 중인 챌린지가 없어요';

  if (!attendChallenges || attendChallenges.length === 0) {
    return (
      <CartEmpty>
        <Text>{emptyText}</Text>
      </CartEmpty>
    );
  }

  return (
    <GridList<ChallengeItemType>
      data={attendChallenges}
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

export default ChallengeCertificationScreen;
