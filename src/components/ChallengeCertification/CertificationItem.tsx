import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import useGetDetailChallenge from '../../hooks/useGetDetailChallenge';
import {removeAttendChallenge} from '../../redux/attendChallenges';
import ChallengeItem from '../common/ChallengeItem';
import CancelButton from './CancelButton';

const CertificationItem: React.FC<{
  itemWidth: number;
  id: number;
}> = ({itemWidth, id}) => {
  const dispatch = useDispatch();
  const data = useGetDetailChallenge(id);
  const handleCancelButton = () => {
    dispatch(removeAttendChallenge(id));
  };
  if (!data) {
    return null;
  }
  return (
    <CertificationItemWrapper itemWidth={itemWidth}>
      <ChallengeItem itemWidth={itemWidth} {...data} />
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
