import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {removeAttendChallenge} from '../../redux/attendChallenges';
import {ChallengeItemType} from '../../types/challengeItem';
import ChallengeItem from '../common/ChallengeItem';
import CancelButton from './CancelButton';

const CertificationItem: React.FC<
  ChallengeItemType & {
    itemWidth: number;
  }
> = props => {
  const dispatch = useDispatch();
  const {itemWidth, id} = props;

  const handleCancelButton = () => {
    dispatch(removeAttendChallenge(id));
  };

  return (
    <CertificationItemWrapper itemWidth={itemWidth}>
      <ChallengeItem {...props} />
      <CertificationItemButtonWrapper>
        <CancelButton onPress={handleCancelButton} />
      </CertificationItemButtonWrapper>
    </CertificationItemWrapper>
  );
};

export default React.memo(CertificationItem);

const CertificationItemWrapper = styled.View<{itemWidth: number}>`
  width: ${({itemWidth}) => itemWidth.toString() + 'px'};
  justify-content: space-between;
  position: relative;
  margin-bottom: 12px;
`;

const CertificationItemButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
