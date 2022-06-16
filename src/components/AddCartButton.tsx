import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

import ShoppingBasketIcon from '../assets/icons/ShoppingBasketIcon';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

const AddCartButton: React.FC<Props> = ({onPress}) => {
  const themes = useTheme();
  return (
    <ChallengeItemCartButton onPress={onPress}>
      <ShoppingBasketIcon width={18} height={18} color={themes.colors.WHITE} />
      <ChallengeItemCartButtonText>장바구니 담기</ChallengeItemCartButtonText>
    </ChallengeItemCartButton>
  );
};

export default AddCartButton;

const ChallengeItemCartButton = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 8px 12px;
  background-color: ${({theme}) => theme.colors.RED};
  align-self: center;
  margin: 0 0 16px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ChallengeItemCartButtonText = styled.Text`
  margin-left: 8px;
  color: ${({theme}) => theme.colors.WHITE};
`;
