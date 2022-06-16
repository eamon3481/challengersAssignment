import React from 'react';
import styled from 'styled-components/native';

type Props = {
  text: string;
  bgColor?: string;
  tagFontSize?: string;
};

const Tag: React.FC<Props> = ({text, tagFontSize, bgColor}) => {
  return (
    <ChallengeTag bgColor={bgColor}>
      <ChallengeTagText tagFontSize={tagFontSize}>{text}</ChallengeTagText>
    </ChallengeTag>
  );
};

export default Tag;

const ChallengeTagText = styled.Text<{tagFontSize?: string}>`
  font-size: ${({tagFontSize}) => tagFontSize || '14px'};
  color: ${({theme}) => theme.colors.BLACK};
`;
const ChallengeTag = styled.View<{bgColor?: string}>`
  border-radius: 4px;
  padding: 4px;
  background-color: ${({theme, bgColor}) => bgColor || theme.colors.GRAY_LIGHT};
  align-self: center;
  margin: 4px;
`;
