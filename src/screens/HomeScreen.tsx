/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, FlatListProps, Text} from 'react-native';
import {useQuery} from 'react-query';
import styled from 'styled-components/native';

import {challengeAPI} from '../api';
import ChallengeItem from '../components/ChallengeItem';
import {ChallengeItemType} from '../types/challengeItem';

const HomeScreen: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 12;
  const numColumns = 2;

  const {isLoading, data} = useQuery(
    'challengeList',
    challengeAPI.reqChallengeList,
  );
  if (isLoading) {
    return <Text>로딩</Text>;
  }
  return (
    <HomeScreenWrapper>
      {data && (
        <HomeFlatList
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
    </HomeScreenWrapper>
  );
};

export default HomeScreen;

const HomeScreenWrapper = styled.View`
  padding: 24px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

const HomeFlatList = styled(
  FlatList as new (
    props: FlatListProps<ChallengeItemType>,
  ) => FlatList<ChallengeItemType>,
)`
  flex: 1;
  height: 100%;
`;
