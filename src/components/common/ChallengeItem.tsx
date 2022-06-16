import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import useGetFixedRatioImageHightByWidth from '../../hooks/useGetFixedRatioImageHightByWidth';
import {ChallengeItemType} from '../../types/challengeItem';
import {getChallengeDuringDateTag, getRegisterTag} from '../../utils/Date';
import ChallengeType from './ChallengeType';
import Tag from './Tag';

const ChallengeItem: React.FC<
  Omit<ChallengeItemType, 'category' | 'id' | 'registerCount'> & {
    itemWidth: number;
  }
> = ({
  thumbnailImageUrl,
  title,
  itemWidth,
  registerStartDate,
  registerEndDate,
  startDate,
  endDate,
  type,
  company,
}) => {
  const ImgHeight = useGetFixedRatioImageHightByWidth({
    imgUrl: thumbnailImageUrl,
    width: itemWidth,
  });

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
    <ChallengeItemWrapper>
      <ChallengeItemImage
        source={{uri: thumbnailImageUrl, height: ImgHeight}}
        resizeMode="contain"
      />
      <ChallengeItemTextWrapper>
        <ChallengeType {...{type, company}} />
        <Text>{title}</Text>
        <ChallengeItemTagWrapper>
          <Tag text={registerTag} />
          <Tag text={challengeDuringTag} />
        </ChallengeItemTagWrapper>
      </ChallengeItemTextWrapper>
    </ChallengeItemWrapper>
  );
};

export default React.memo(ChallengeItem);

const ChallengeItemWrapper = styled.View`
  position: relative;
`;

const ChallengeItemImage = styled.Image`
  border-radius: 10px;
`;

const ChallengeItemTextWrapper = styled.View`
  padding: 8px;
`;

const ChallengeItemTagWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;
