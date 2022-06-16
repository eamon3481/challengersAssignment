import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import CartList from '../components/Cart/CartList';

const CartScreen: React.FC = () => {
  return (
    <CartScreenWrapper edges={['bottom', 'left', 'right']}>
      <CartList />
    </CartScreenWrapper>
  );
};

export default CartScreen;

const CartScreenWrapper = styled(SafeAreaView)`
  flex: 1;
`;
