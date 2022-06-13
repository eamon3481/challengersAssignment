import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigation from './TabNavigation';

const Navigate: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default Navigate;
