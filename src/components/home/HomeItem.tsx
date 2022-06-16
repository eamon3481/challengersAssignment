import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {addCartItem, removeCartItem} from '../../redux/cartItems';
import {ChallengeItemType} from '../../types/challengeItem';
import AddCartButton from '../common/AddCartButton';
import ChallengeItem from '../common/ChallengeItem';
import Tag from '../common/Tag';

const HomeItem: React.FC<
  ChallengeItemType & {
    itemWidth: number;
    isCart: boolean;
  }
> = props => {
  const dispatch = useDispatch();
  const {isCart, itemWidth, id, registerCount} = props;

  const handleAddCartButton = () => {
    if (isCart) {
      dispatch(removeCartItem(id));
    } else {
      dispatch(addCartItem(id));
    }
  };
  return (
    <ChallengeItemWrapper itemWidth={itemWidth}>
      <ChallengeItem {...props} />
      <ChallengeItemRegisterCountWrapper>
        <Tag text={registerCount.toString() + '명'} tagFontSize={'10px'} />
      </ChallengeItemRegisterCountWrapper>
      <AddCartButton onPress={handleAddCartButton} isCart={isCart} />
    </ChallengeItemWrapper>
  );
};

export default React.memo(HomeItem);

const ChallengeItemWrapper = styled.View<{itemWidth: number}>`
  width: ${({itemWidth}) => itemWidth.toString() + 'px'};
  justify-content: space-between;
  position: relative;
`;

const ChallengeItemRegisterCountWrapper = styled.View`
  position: absolute;
  right: 4px;
  top: 4px;
  opacity: 0.8;
`;
