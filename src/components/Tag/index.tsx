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
  color: #333;
`;
const ChallengeTag = styled.View`
  border-radius: 4px;
  padding: 4px;
  background-color: #e1e1e1;
  align-self: center;
  margin: 4px;
`;
