import React, {useCallback} from 'react';
import {ListRenderItem, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

import CertificationItem from '../components/ChallengeCertification/CertificationItem';
import GridList from '../components/common/GridList';
import {RootState} from '../store';

const ChallengeCertificationScreen: React.FC = () => {
  const {attendChallenges} = useSelector<RootState, RootState>(state => state);
  const renderItem: (itemWidth: number) => ListRenderItem<number> = useCallback(
    itemWidth =>
      ({item}) =>
        <CertificationItem itemWidth={itemWidth} id={item} />,
    [],
  );

  const emptyText = '참가 중인 챌린지가 없어요';

  if (!attendChallenges.value || attendChallenges.value.length === 0) {
    return (
      <CartEmpty>
        <Text>{emptyText}</Text>
      </CartEmpty>
    );
  }

  return (
    <GridList<number>
      data={attendChallenges.value}
      renderItem={renderItem}
      numColumns={1}
      keyExtractor={item => item.toString()}
    />
  );
};

const CartEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ChallengeCertificationScreen;
