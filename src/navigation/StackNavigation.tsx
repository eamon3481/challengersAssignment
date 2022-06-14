import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/CartScreen';
import TabNavigation from './TabNavigation';

export type StackNavigationType = {
  Tab: undefined;
  Cart: undefined;
};

const StackNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator<StackNavigationType>();
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{
          headerShown: false,
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
