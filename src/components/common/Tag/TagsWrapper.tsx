import React from 'react';
import styled from 'styled-components/native';

import {ChallengeItemType} from '../../../types/challengeItem';
import {getChallengeDuringDateTag, getRegisterTag} from '../../../utils/Date';

import Tag from '.';
type Props = Pick<
  ChallengeItemType,
  'registerEndDate' | 'registerStartDate' | 'startDate' | 'endDate'
>;

const TagsWrapper: React.FC<Props> = ({
  registerEndDate,
  registerStartDate,
  startDate,
  endDate,
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
    <ChallengeItemTagWrapper>
      <Tag text={registerTag} />
      <Tag text={challengeDuringTag} />
    </ChallengeItemTagWrapper>
  );
};

export default TagsWrapper;

const ChallengeItemTagWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;
