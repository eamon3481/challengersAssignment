import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';

export type StackNavigationType = {
  Home: undefined;
  Cart: undefined;
};

const StackNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator<StackNavigationType>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
