import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  isAttend: boolean;
};

const JoinButton: React.FC<Props> = ({onPress, isAttend}) => {
  const buttonText = isAttend ? '이미 참가한 챌린지 입니다' : '챌린지 참가하기';
  return (
    <JoinButtonWrapper disabled={isAttend} {...{onPress, isAttend}}>
      <JoinButtonText isAttend={isAttend}>{buttonText}</JoinButtonText>
    </JoinButtonWrapper>
  );
};

export default JoinButton;

const JoinButtonWrapper = styled.TouchableOpacity<{isAttend: boolean}>`
  border-radius: 4px;
  padding: 8px 12px;
  background-color: ${({theme, isAttend}) =>
    isAttend ? theme.colors.GRAY_LIGHT : theme.colors.RED};
  border: 1px solid
    ${({theme, isAttend}) =>
      isAttend ? theme.colors.GRAY_LIGHT : theme.colors.RED};
  align-self: center;
  margin: 0 0 16px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const JoinButtonText = styled.Text<{isAttend: boolean}>`
  margin-left: 8px;
  color: ${({theme, isAttend}) =>
    isAttend ? theme.colors.BLACK : theme.colors.WHITE};
`;
