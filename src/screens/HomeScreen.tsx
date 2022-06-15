/* eslint-disable react-native/no-inline-styles */
import React, {Suspense} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import ChallengeList from '../components/ChallengeList';

const HomeScreen: React.FC = () => {
  return (
    <HomeScreenWrapper>
      <Suspense fallback={<Text>로딩</Text>}>
        <ChallengeList />
      </Suspense>
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
