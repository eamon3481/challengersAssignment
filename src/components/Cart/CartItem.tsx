import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import useGetDetailChallenge from '../../hooks/useGetDetailChallenge';
import {addAttendChallenges} from '../../redux/attendChallenges';
import {removeCartItem} from '../../redux/cartItems';
import AddCartButton from '../common/Buttons/AddCartButton';
import JoinButton from '../common/Buttons/JoinButton';
import ChallengeItem from '../common/ChallengeItem';

const CartItem: React.FC<{
  itemWidth: number;
  isAttend: boolean;
  id: number;
}> = ({itemWidth, id, isAttend}) => {
  const dispatch = useDispatch();

  const data = useGetDetailChallenge(id);

  const handleAddCartButton = () => {
    dispatch(removeCartItem(id));
  };

  const handleAttendButton = () => {
    dispatch(addAttendChallenges(id));
  };
  if (!data) {
    return null;
  }

  return (
    <CartItemWrapper itemWidth={itemWidth}>
      <ChallengeItem itemWidth={itemWidth} {...data} />
      <CartItemButtonWrapper>
        <AddCartButton onPress={handleAddCartButton} isCart={true} />
        <JoinButton onPress={handleAttendButton} isAttend={isAttend} />
      </CartItemButtonWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;

const CartItemWrapper = styled.View<{itemWidth: number}>`
  width: ${({itemWidth}) => itemWidth.toString() + 'px'};
  justify-content: space-between;
  position: relative;
`;

const CartItemButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
