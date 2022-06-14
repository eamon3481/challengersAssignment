/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';

import ChallengeItem from '../components/ChallengeItem';

const mockData = {
  category: '환경',
  endDate: '2022-06-19T23:59:59',
  id: 198575,
  registerCount: 7765,
  registerEndDate: '2022-06-19T22:59:59',
  registerStartDate: '2022-05-30T17:00:00',
  startDate: '2022-05-30T00:00:00',
  thumbnailImageUrl:
    'https://d246jgzr1jye8u.cloudfront.net/development/admin/1654930852895.jpg',
  title: '[#GREEN YOUR DAY] 환경 보호 행동 실천하고 공유하기 ',
  type: 'official',
};

const DATA = Array.from({length: 5}, (_, i) => ({...mockData, id: i}));
const HomeScreen: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 12;
  const numColumns = 2;

  return (
    <HomeScreenWrapper>
      <HomeFlatList
        numColumns={numColumns}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: gap,
        }}
        data={DATA}
        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        renderItem={({item}) => (
          <ChallengeItem
            itemWidth={(containerWidth - gap) / numColumns}
            {...item}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;

const HomeScreenWrapper = styled.View`
  padding: 24px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeFlatList = styled(
  FlatList as new (props: FlatListProps<typeof mockData>) => FlatList<
    typeof mockData
  >,
)`
  // justify-content: 'space-between';
`;
