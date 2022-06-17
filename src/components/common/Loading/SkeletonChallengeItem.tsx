import React from 'react';
import styled from 'styled-components/native';

type Props = {
  itemWidth: number;
};

const SkeletonChallengeItem: React.FC<Props> = ({itemWidth}) => {
  return (
    <ChallengeItemWrapper itemWidth={itemWidth}>
      <ChallengeItemImage />

      <ChallengeItemTextWrapper>
        <ChallengeTypeWrapper>
          <SkeletonText width="30%" />
        </ChallengeTypeWrapper>
        <SkeletonText width="100%" />
        <SkeletonText width="40%" />
      </ChallengeItemTextWrapper>
      <ChallengeItemTagWrapper>
        <SkeletonTag width="40%" />
      </ChallengeItemTagWrapper>
    </ChallengeItemWrapper>
  );
};

export default SkeletonChallengeItem;

const ChallengeItemWrapper = styled.View<{itemWidth: number}>`
  width: ${({itemWidth}) => itemWidth.toString() + 'px'};
`;

const SkeletonText = styled.View<{width: string}>`
  border-radius: 10px;
  height: 10px;
  background-color: gray;
  width: ${({width}) => width};
  margin: 4px 0;
  opacity: 0.5;
`;

const ChallengeTypeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
`;

const SkeletonTag = styled.View<{width: string}>`
  border-radius: 4px;
  padding: 4px;
  margin: 4px;
  height: 20px;
  background-color: gray;
  opacity: 0.5;
  width: ${({width}) => width};
  margin: 4px 0;
`;

const ChallengeItemImage = styled.View`
  border-radius: 10px;
  height: 100px;
  background-color: gray;
  opacity: 0.5;
`;

const ChallengeItemTextWrapper = styled.View`
  padding: 8px;
`;

const ChallengeItemTagWrapper = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;
