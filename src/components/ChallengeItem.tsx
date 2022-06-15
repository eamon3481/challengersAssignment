import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import ChallengersLogo from '../assets/icons/ChallengersLogo';
import useGetFixedRatioImageHightByWidth from '../hooks/useGetFixedRatioImageHightByWidth';
import Tag from './Tag';

type CategoryType = '운동' | '식습관' | '생활' | '정서' | '취미' | '환경';
type CompanyType = {
  id: number;
  name: string;
};
type ResponsePartnerType = {
  type: 'partner';
  company: CompanyType;
  category: CategoryType;
  registerCount: number;
  registerEndDate: string;
  registerStartDate: string;
  endDate: string;
  startDate: string;
  title: string;
  thumbnailImageUrl: string;
  id: number;
};
export type ResponseOfficialType = {
  type: 'official';
  category: CategoryType;
  registerCount: number;
  registerEndDate: string;
  registerStartDate: string;
  endDate: string;
  startDate: string;
  title: string;
  thumbnailImageUrl: string;
  id: number;
};

export type ChallengeItemType = ResponseOfficialType | ResponsePartnerType;

const ChallengeItem: React.FC<ChallengeItemType & {itemWidth: number}> = ({
  thumbnailImageUrl,
  title,
  itemWidth,
}) => {
  const ImgHeight = useGetFixedRatioImageHightByWidth({
    imgUrl: thumbnailImageUrl,
    width: itemWidth,
  });

  return (
    <ChallengeItemWrapper itemWidth={itemWidth}>
      <ChallengeItemImage
        source={{uri: thumbnailImageUrl, height: ImgHeight}}
        resizeMode="contain"
      />
      <ChallengeItemTextWrapper>
        <View>
          <ChallengersLogo width={18} height={18} color={'gray'} />
        </View>
        <Text>{title}</Text>
        <ChallengeItemTagWrapper>
          <Tag text="6일 간 진행" />
          <Tag text="2주동안" />
          <Tag text="2주동안" />
        </ChallengeItemTagWrapper>
      </ChallengeItemTextWrapper>
    </ChallengeItemWrapper>
  );
};

export default ChallengeItem;

const ChallengeItemWrapper = styled.View<{itemWidth: number}>`
  width: ${({itemWidth}) => itemWidth.toString() + 'px'};
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
