/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';

import ChallengeItem from '../components/ChallengeItem';
import {ChallengeItemType} from '../types/challengeItem';

const mockData: ChallengeItemType[] = [
  {
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
  },
  {
    category: '생활',
    endDate: '2022-06-24T23:59:59',
    id: 197861,
    registerCount: 6590,
    registerEndDate: '2022-06-12T23:59:59',
    registerStartDate: '2022-05-30T00:00:00',
    startDate: '2022-06-13T00:00:00',
    thumbnailImageUrl:
      'https://d246jgzr1jye8u.cloudfront.net/development/admin/1644761320879.png',
    title: '[이벤트] 미라클모닝 챌린지',
    type: 'official',
  },
  {
    category: '환경',
    company: {
      id: 198,
      name: 'BGF리테일',
    },
    endDate: '2022-06-30T23:59:59',
    id: 198409,
    registerCount: 4335,
    registerEndDate: '2022-06-13T23:59:59',
    registerStartDate: '2022-05-26T19:00:00',
    startDate: '2022-06-06T00:00:00',
    thumbnailImageUrl:
      'https://d246jgzr1jye8u.cloudfront.net/development/admin/1653895539894.jpg',
    title: '[CU] 함께 만들어요! 대한민국 플로깅 지도',
    type: 'partner',
  },
  {
    category: '운동',
    endDate: '2022-07-03T23:59:59',
    id: 199466,
    registerCount: 1702,
    registerEndDate: '2022-06-21T23:59:59',
    registerStartDate: '2022-06-07T00:00:00',
    startDate: '2022-06-20T00:00:00',
    thumbnailImageUrl:
      'https://d246jgzr1jye8u.cloudfront.net/development/admin/1647265087794.png',
    title: '[이벤트] 1만보 걷기 ',
    type: 'official',
  },
  {
    category: '운동',
    endDate: '2022-07-03T23:59:59',
    id: 199466,
    registerCount: 1702,
    registerEndDate: '2022-06-21T23:59:59',
    registerStartDate: '2022-06-07T00:00:00',
    startDate: '2022-06-20T00:00:00',
    thumbnailImageUrl:
      'https://d246jgzr1jye8u.cloudfront.net/development/admin/1647265087794.png',
    title: '[이벤트] 1만보 걷기 ',
    type: 'official',
  },
  {
    category: '운동',
    endDate: '2022-07-03T23:59:59',
    id: 199466,
    registerCount: 1702,
    registerEndDate: '2022-06-21T23:59:59',
    registerStartDate: '2022-06-07T00:00:00',
    startDate: '2022-06-20T00:00:00',
    thumbnailImageUrl:
      'https://d246jgzr1jye8u.cloudfront.net/development/admin/1647265087794.png',
    title: '[이벤트] 1만보 걷기 ',
    type: 'official',
  },
  {
    category: '운동',
    endDate: '2022-07-03T23:59:59',
    id: 199466,
    registerCount: 1702,
    registerEndDate: '2022-06-21T23:59:59',
    registerStartDate: '2022-06-07T00:00:00',
    startDate: '2022-06-20T00:00:00',
    thumbnailImageUrl:
      'https://d246jgzr1jye8u.cloudfront.net/development/admin/1647265087794.png',
    title: '[이벤트] 1만보 걷기 ',
    type: 'official',
  },
];

const DATA = mockData;
const HomeScreen: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  const gap = 12;
  const numColumns = 2;

  return (
    <HomeScreenWrapper>
      <HomeFlatList
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
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
