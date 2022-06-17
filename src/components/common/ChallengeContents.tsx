import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {ChallengeItemType} from '../../types/challengeItem';
import {getChallengeDuringDateTag, getRegisterTag} from '../../utils/Date';
import ChallengeType from './ChallengeType';
import Tag from './Tag';

const ChallengeContents: React.FC<
  Pick<
    ChallengeItemType,
    | 'title'
    | 'registerStartDate'
    | 'company'
    | 'type'
    | 'endDate'
    | 'startDate'
    | 'registerEndDate'
  >
> = ({
  title,
  registerStartDate,
  company,
  type,
  endDate,
  startDate,
  registerEndDate,
}) => {
  const registerStartDateObj = new Date(registerStartDate);
  const registerEndDateObj = new Date(registerEndDate);
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const registerTag = getRegisterTag(registerStartDateObj, registerEndDateObj);
  const challengeDuringTag = getChallengeDuringDateTag(
    startDateObj,
    endDateObj,
  );

  return (
    <ChallengeItemTextWrapper>
      <ChallengeType {...{type, company}} />
      <Text>{title}</Text>
      <ChallengeItemTagWrapper>
        <Tag text={registerTag} />
        <Tag text={challengeDuringTag} />
      </ChallengeItemTagWrapper>
    </ChallengeItemTextWrapper>
  );
};

export default React.memo(ChallengeContents);

const ChallengeItemTextWrapper = styled.View`
  padding: 8px;
`;

const ChallengeItemTagWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;
