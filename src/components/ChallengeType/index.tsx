import React from 'react';
import styled from 'styled-components/native';

import ChallengersLogo from '../../assets/icons/ChallengersLogo';
import {CompanyType} from '../../types/challengeItem';

type Props = {
  type: 'partner' | 'official';
  company?: CompanyType;
};

const ChallengeType: React.FC<Props> = ({type, company}) => {
  const typeText =
    type === 'official' ? '공식 챌린지' : `${company?.name} X 첼린저스`;
  console.log(typeText, type);
  return (
    <ChallengeTypeWrapper>
      <ChallengersLogo width={18} height={18} color={'gray'} />
      <ChallengeTypeText>{typeText}</ChallengeTypeText>
    </ChallengeTypeWrapper>
  );
};

export default ChallengeType;
const ChallengeTypeText = styled.Text`
  margin-left: 4px;
  font-size: 12px;
  color: gray;
  font-weight: 700;
`;

const ChallengeTypeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
`;
