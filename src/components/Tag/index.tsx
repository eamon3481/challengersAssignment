import React from 'react';
import styled from 'styled-components/native';

type Props = {
  text: string;
};

const Tag: React.FC<Props> = ({text}) => {
  return (
    <ChallengeTag>
      <ChallengeTagText>{text}</ChallengeTagText>
    </ChallengeTag>
  );
};

export default Tag;

const ChallengeTagText = styled.Text`
  color: ${({theme}) => theme.colors.BLACK};
`;
const ChallengeTag = styled.View`
  border-radius: 4px;
  padding: 4px;
  background-color: ${({theme}) => theme.colors.GRAY_LIGHT};
  align-self: center;
  margin: 4px;
`;
