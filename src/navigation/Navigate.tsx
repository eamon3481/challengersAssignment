import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import StackNavigation from './StackNavigation';

const Navigate: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigate;
