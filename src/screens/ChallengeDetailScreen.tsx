import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

import useGetDetailChallenge from '../hooks/useGetDetailChallenge';
type ParamList = {
  prams: {
    id: number;
  };
};

const ChallengeDetailScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'prams'>>();
  const data = useGetDetailChallenge(route.params.id);
  console.log(data);
  return (
    <View>
      <Text>{'dd'}</Text>
    </View>
  );
};

export default ChallengeDetailScreen;
