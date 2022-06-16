import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

import {StackNavigationType} from '../navigation/StackNavigation';
type ParamList = {
  prams: {
    id: number;
  };
};

const ChallengeDetailScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'prams'>>();
  const navigation = useNavigation<NavigationProp<StackNavigationType>>();
  console.log(route.params.id);
  return (
    <View>
      <Text>{navigation.getId()}</Text>
    </View>
  );
};

export default ChallengeDetailScreen;
