/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';

import {challengeAPI} from '../api';
import {CategoryType, ChallengeItemType} from '../types/challengeItem';
import ChallengeItem from './ChallengeItem';

type Props = {
  category?: CategoryType;
};

const ChallengeList: React.FC<Props> = ({category}) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 12;
  const numColumns = 2;

  const {data} = useQuery(['challengeList', category], () =>
    challengeAPI.reqChallengeList(category),
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
          data={data.data.data.challenges}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => (
            <ChallengeItem
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
