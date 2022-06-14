import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Camera from '../assets/icons/CameraIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import ChallengeCertificationScreen from '../screens/ChallengeCertificationScreen';
import HomeScreen from '../screens/HomeScreen';
// import { Container } from './styles';

const TabNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="홈">
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon height={32} width={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="챌린지 인증"
        component={ChallengeCertificationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Camera height={32} width={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
