import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

import ShoppingBasketIcon from '../../../assets/icons/ShoppingBasketIcon';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  isCart: boolean;
};

const AddCartButton: React.FC<Props> = ({isCart, onPress}) => {
  const themes = useTheme();
  return (
    <ChallengeItemCartButton {...{onPress, isCart}}>
      <ShoppingBasketIcon
        width={18}
        height={18}
        color={isCart ? themes.colors.RED : themes.colors.WHITE}
      />
      <ChallengeItemCartButtonText isCart={isCart}>
        {isCart ? '장바구니 삭제' : '장바구니 담기'}
      </ChallengeItemCartButtonText>
    </ChallengeItemCartButton>
  );
};

export default AddCartButton;

const ChallengeItemCartButton = styled.TouchableOpacity<{isCart: boolean}>`
  border-radius: 4px;
  padding: 8px 12px;
  background-color: ${({theme, isCart}) =>
    isCart ? 'transparent' : theme.colors.RED};
  border: 1px solid ${({theme}) => theme.colors.RED};
  align-self: center;
  margin: 0 0 16px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ChallengeItemCartButtonText = styled.Text<{isCart: boolean}>`
  margin-left: 8px;
  color: ${({theme, isCart}) =>
    isCart ? theme.colors.RED : theme.colors.WHITE};
`;
