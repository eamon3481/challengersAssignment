import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';

import {StackNavigationType} from '../../navigation/StackNavigation';
import {addCartItem, removeCartItem} from '../../redux/cartItems';
import {ChallengeItemType} from '../../types/challengeItem';
import ChallengeItem from '../common/ChallengeItem';
import Tag from '../common/Tag';
import AddCartButton from '../common/Tag/AddCartButton';

const HomeItem: React.FC<
  ChallengeItemType & {
    itemWidth: number;
    isCart: boolean;
  }
> = props => {
  const dispatch = useDispatch();
  const navigate = useNavigation<NavigationProp<StackNavigationType>>();
  const {isCart, itemWidth, id, registerCount} = props;

  const handleAddCartButton = () => {
    if (isCart) {
      dispatch(removeCartItem(id));
    } else {
      dispatch(addCartItem(id));
    }
  };
  return (
    <ChallengeItemWrapper
      onPress={() =>
        navigate.navigate('ChallengeDetail', {
          id,
        })
      }
      itemWidth={itemWidth}>
      <ChallengeItem {...props} />
      <ChallengeItemRegisterCountWrapper>
        <Tag text={registerCount.toString() + '명'} tagFontSize={'10px'} />
      </ChallengeItemRegisterCountWrapper>
      <AddCartButton onPress={handleAddCartButton} isCart={isCart} />
    </ChallengeItemWrapper>
  );
};

export default React.memo(HomeItem);

const ChallengeItemWrapper = styled.TouchableOpacity<{itemWidth: number}>`
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
