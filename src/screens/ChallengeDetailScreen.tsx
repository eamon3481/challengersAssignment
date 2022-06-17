import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import ChallengeDetail from '../components/ChallengeDetail';
import useGetDetailChallenge from '../hooks/useGetDetailChallenge';
type ParamList = {
  prams: {
    id: number;
  };
};

const ChallengeDetailScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'prams'>>();
  const data = useGetDetailChallenge(route.params.id);
  if (!data) {
    return <Text />;
  }
  return (
    <ChallengeDetailWrapper edges={['bottom', 'left', 'right']}>
      <ChallengeDetail {...data} />
    </ChallengeDetailWrapper>
  );
};

export default ChallengeDetailScreen;

const ChallengeDetailWrapper = styled(SafeAreaView)`
  flex: 1;
`;
