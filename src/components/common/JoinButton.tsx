import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

const JoinButton: React.FC<Props> = ({onPress}) => {
  return (
    <JoinButtonWrapper {...{onPress}}>
      <JoinButtonText>챌린지 참가하기</JoinButtonText>
    </JoinButtonWrapper>
  );
};

export default JoinButton;

const JoinButtonWrapper = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 8px 12px;
  background-color: ${({theme}) => theme.colors.RED};
  border: 1px solid ${({theme}) => theme.colors.RED};
  align-self: center;
  margin: 0 0 16px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const JoinButtonText = styled.Text`
  margin-left: 8px;
  color: ${({theme}) => theme.colors.WHITE};
`;
