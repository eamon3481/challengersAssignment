import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ChallengeCertificationScreen from '../screens/ChallengeCertificationScreen';
import StackNavigation from './StackNavigation';

// import { Container } from './styles';

const TabNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="홈">
      <Tab.Screen name="홈" component={StackNavigation} />
      <Tab.Screen name="챌린지 인증" component={ChallengeCertificationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
