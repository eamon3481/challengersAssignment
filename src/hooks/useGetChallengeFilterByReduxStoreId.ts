import {useSelector} from 'react-redux';

import {RootState} from '../store';
import {ChallengeItemType} from '../types/challengeItem';

const useGetChallengeFilterByReduxStoreId = (
  key: 'cartItems' | 'attendChallenges',
): ChallengeItemType[] | undefined => {
  const filteredChallenges = useSelector<
    RootState,
    ChallengeItemType[] | undefined
  >(state => {
    const challengeMap = state.challenges.value;

    return state[key].value.map(id => challengeMap[id]);
  });
  return filteredChallenges;
};

export default useGetChallengeFilterByReduxStoreId;
