import React from 'react';
import styled from 'styled-components/native';

import {getMonthDateDayString} from '../../utils/Date';

const ChallengeDuringTime: React.FC<{startDate: string; endDate: string}> = ({
  startDate,
  endDate,
}) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const duringString =
    getMonthDateDayString(startDateObj) +
    ' ~ ' +
    getMonthDateDayString(endDateObj);

  return (
    <ChallengeDuringTimeWrapper>
      <ChallengeDuringTimeTitle>챌린지 기간</ChallengeDuringTimeTitle>
      <ChallengeDuringTimeTitle>{duringString}</ChallengeDuringTimeTitle>
    </ChallengeDuringTimeWrapper>
  );
};

export default ChallengeDuringTime;

const ChallengeDuringTimeWrapper = styled.View`
  padding: 12px;
`;

const ChallengeDuringTimeTitle = styled.Text`
  font-size: 16px;
  margin: 4px 0;
`;
