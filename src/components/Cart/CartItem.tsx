import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {removeCartItem} from '../../redux/cartItems';
import {ChallengeItemType} from '../../types/challengeItem';
import AddCartButton from '../common/AddCartButton';
import ChallengeItem from '../common/ChallengeItem';
import JoinButton from '../common/JoinButton';

const CartItem: React.FC<
  ChallengeItemType & {
    itemWidth: number;
  }
> = props => {
  const dispatch = useDispatch();
  const {itemWidth, id} = props;

  const handleAddCartButton = () => {
    dispatch(removeCartItem(id));
  };
  return (
    <CartItemWrapper itemWidth={itemWidth}>
      <ChallengeItem {...props} />
      <CartItemButtonWrapper>
        <AddCartButton onPress={handleAddCartButton} isCart={true} />
        <JoinButton onPress={handleAddCartButton} />
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
