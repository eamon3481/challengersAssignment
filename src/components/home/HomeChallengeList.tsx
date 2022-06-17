import React, {useCallback} from 'react';
import {ListRenderItem} from 'react-native';
import {useSelector} from 'react-redux';

import useQueryReduxStore from '../../hooks/useQueryReduxStore';
import {RootState} from '../../store';
import {CategoryType, ChallengeItemType} from '../../types/challengeItem';
import GridList from '../common/GridList';
import HomeItem from './HomeItem';

type Props = {
  category?: CategoryType;
};

const HomeChallengeList: React.FC<Props> = ({category}) => {
  const cartList = useSelector<RootState, number[]>(
    state => state.cartItems.value,
  );

  const data = useQueryReduxStore(category);

  const renderItem: (itemWidth: number) => ListRenderItem<ChallengeItemType> =
    useCallback(
      itemWidth =>
        ({item}) =>
          (
            <HomeItem
              isCart={cartList.includes(item.id)}
              itemWidth={itemWidth}
              {...item}
            />
          ),
      [cartList],
    );

  return (
    <>
      {data && (
        <GridList<ChallengeItemType>
          renderItem={renderItem}
          gap={12}
          numColumns={2}
          data={data}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  );
};
export default React.memo(HomeChallengeList);
