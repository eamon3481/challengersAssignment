import React, {useState} from 'react';
import {Text, Image, View} from 'react-native';
import styled from 'styled-components/native';

import ChallengersLogo from '../assets/icons/ChallengersLogo';

// type CategoryType = '운동' | '식습관' | '생활' | '정서' | '취미' | '환경';

// type responsePartnerType = {
//   type: 'partner';
//   company: {
//     id: number;
//     name: string;
//   };
//   category: string;
//   registerCount: number;
//   registerEndDate: string;
//   registerStartDate: string;
//   endDate: string;
//   startDate: string;
//   title: string;
//   thumbnailImageUrl: string;
//   id: number;
// };
export type responseOfficialType = {
  type: string;
  category: string;
  registerCount: number;
  registerEndDate: string;
  registerStartDate: string;
  endDate: string;
  startDate: string;
  title: string;
  thumbnailImageUrl: string;
  id: number;
  itemWidth: number;
};

const ChallengeItem: React.FC<responseOfficialType> = ({
  thumbnailImageUrl,
  title,
  itemWidth,
}) => {
  const [height, setHeight] = useState(0);
  Image.getSize(thumbnailImageUrl, (w, h) => {
    setHeight(h * (itemWidth / w));
  });
  return (
    <ChallengeItemWrapper itemWidth={itemWidth}>
      <ChallengeItemImage
        source={{uri: thumbnailImageUrl, height}}
        resizeMode="contain"
      />
      <ChallengeItemTextWrapper>
        <View>
          <ChallengersLogo width={18} height={18} color={'gray'} />
        </View>
        <Text>{title}</Text>
        <ChallengeItemTagWrapper>
          <ChallengeTag>
            <ChallengeTagText>6일 뒤 시작</ChallengeTagText>
          </ChallengeTag>
          <ChallengeTag>
            <ChallengeTagText>2주동안</ChallengeTagText>
          </ChallengeTag>
          <ChallengeTag>
            <ChallengeTagText>2주동안</ChallengeTagText>
          </ChallengeTag>
        </ChallengeItemTagWrapper>
      </ChallengeItemTextWrapper>
    </ChallengeItemWrapper>
  );
};

export default ChallengeItem;
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

const ChallengeItemWrapper = styled.View<{itemWidth: number}>`
  width: ${({itemWidth}) => itemWidth.toString() + 'px'};
  border: 1px solid black;
  border-radius: 10px;
`;

const ChallengeItemImage = styled.Image`
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ChallengeItemTextWrapper = styled.View`
  padding: 8px;
`;

const ChallengeItemTagWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;
