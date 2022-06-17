import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import useIsAttendAndCartChallenge from '../../hooks/useIsAttendAndCartChallenge';
import {addAttendChallenges} from '../../redux/attendChallenges';
import {addCartItem, removeCartItem} from '../../redux/cartItems';
import {ChallengeItemType} from '../../types/challengeItem';
import JoinButton from '../common/Buttons/JoinButton';
import ChallengeType from '../common/ChallengeType';
import AddCartButton from '../common/Tag/AddCartButton';
import TagsWrapper from '../common/Tag/TagsWrapper';
import ChallengeDuringTime from './ChallengeDuringTime';

const ChallengeDetail: React.FC<ChallengeItemType> = ({
  thumbnailImageUrl,
  title,
  type,
  company,
  registerEndDate,
  registerStartDate,
  endDate,
  startDate,
  id,
}) => {
  const {isAttend, isCart} = useIsAttendAndCartChallenge(id);
  const dispatch = useDispatch();

  const handleAddCartButton = () => {
    if (isCart) {
      dispatch(removeCartItem(id));
    } else {
      dispatch(addCartItem(id));
    }
  };

  const handleAttendButton = () => {
    dispatch(addAttendChallenges(id));
  };

  return (
    <ChallengeItemWrapper>
      <View>
        <ChallengeItemImage source={{uri: thumbnailImageUrl}} />
        <ChallengeItemTextWrapper>
          <ChallengeType {...{type, company}} />
          <ChallengeItemTex>{title}</ChallengeItemTex>
          <TagsWrapper
            {...{registerEndDate, registerStartDate, endDate, startDate}}
          />
          <ChallengeDuringTime startDate={startDate} endDate={endDate} />
        </ChallengeItemTextWrapper>
      </View>
      <CartItemButtonWrapper>
        <AddCartButton onPress={handleAddCartButton} isCart={isCart} />
        <JoinButton onPress={handleAttendButton} isAttend={isAttend} />
      </CartItemButtonWrapper>
    </ChallengeItemWrapper>
  );
};

export default React.memo(ChallengeDetail);

const ChallengeItemWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const ChallengeItemImage = styled.Image`
  height: 40%;
`;

const ChallengeItemTextWrapper = styled.View`
  margin-top: 32px;
  padding: 0 18px;
`;

const ChallengeItemTex = styled.Text`
  font-weight: 700;
  font-size: 24px;
  margin: 18px 0;
`;

const CartItemButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 24px 0;
`;
