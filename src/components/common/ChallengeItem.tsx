import React from 'react';
import styled from 'styled-components/native';

import useGetFixedRatioImageHightByWidth from '../../hooks/useGetFixedRatioImageHightByWidth';
import {ChallengeItemType} from '../../types/challengeItem';
import ChallengeContents from './ChallengeContents';

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

  return (
    <ChallengeItemWrapper>
      <ChallengeItemImage
        source={{uri: thumbnailImageUrl, height: ImgHeight}}
        resizeMode="contain"
      />
      <ChallengeContents
        {...{
          title,
          registerStartDate,
          company,
          type,
          endDate,
          startDate,
          registerEndDate,
        }}
      />
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
