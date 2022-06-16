import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MainHeader from '../components/MainHeader';
import CartScreen from '../screens/CartScreen';
import ChallengeDetailScreen from '../screens/ChallengeDetailScreen';
import TabNavigation from './TabNavigation';

export type StackNavigationType = {
  Tab: undefined;
  Cart: undefined;
  ChallengeDetail: {id: number};
};

const StackNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator<StackNavigationType>();
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{
          header: ({navigation}) => <MainHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="ChallengeDetail"
        component={ChallengeDetailScreen}
        options={{
          headerTitle: ' ',
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: '장바구니',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
