import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {addAttendChallenges} from '../../redux/attendChallenges';
import {removeCartItem} from '../../redux/cartItems';
import {ChallengeItemType} from '../../types/challengeItem';
import JoinButton from '../common/Buttons/JoinButton';
import ChallengeItem from '../common/ChallengeItem';
import AddCartButton from '../common/Tag/AddCartButton';

const CartItem: React.FC<
  ChallengeItemType & {
    itemWidth: number;
    isAttend: boolean;
  }
> = props => {
  const dispatch = useDispatch();
  const {itemWidth, id, isAttend} = props;

  const handleAddCartButton = () => {
    dispatch(removeCartItem(id));
  };

  const handleAttendButton = () => {
    dispatch(addAttendChallenges(id));
  };

  return (
    <CartItemWrapper itemWidth={itemWidth}>
      <ChallengeItem {...props} />
      <CartItemButtonWrapper>
        <AddCartButton onPress={handleAddCartButton} isCart={true} />
        <JoinButton onPress={handleAttendButton} isAttend={isAttend} />
      </CartItemButtonWrapper>
    </CartItemWrapper>
  );
};

export default React.memo(CartItem);

const CartItemWrapper = styled.View<{itemWidth: number}>`
  width: ${({itemWidth}) => itemWidth.toString() + 'px'};
  justify-content: space-between;
  position: relative;
`;

const CartItemButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
