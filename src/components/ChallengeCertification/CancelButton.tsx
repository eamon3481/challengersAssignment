import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

const CancelButton: React.FC<Props> = ({onPress}) => {
  return (
    <CancelButtonWrapper {...{onPress}}>
      <CancelButtonText>취소</CancelButtonText>
    </CancelButtonWrapper>
  );
};

export default CancelButton;

const CancelButtonWrapper = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 8px 12px;
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.RED};
  align-self: center;
  margin: 0 0 16px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CancelButtonText = styled.Text`
  margin-left: 8px;
  color: ${({theme}) => theme.colors.RED};
`;
