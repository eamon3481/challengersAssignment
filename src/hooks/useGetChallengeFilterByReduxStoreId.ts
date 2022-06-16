import {useSelector} from 'react-redux';

import {RootState, storeKEY} from '../store';
import {ChallengeItemType} from '../types/challengeItem';
import {trim} from '../utils/type';
import {useGetQueryState} from './useQueryClientStore';

const useGetChallengeFilterByReduxStoreId = (
  key: storeKEY,
): ChallengeItemType[] | undefined => {
  const challengeList = useGetQueryState<ChallengeItemType[]>([
    'challengeList',
    undefined,
  ]);

  const filteredChallenges = useSelector<
    RootState,
    ChallengeItemType[] | undefined
  >(state =>
    challengeList
      ? state[key].value
          .map(id => challengeList.find(item => item.id === id))
          .filter(trim)
      : undefined,
  );
  return filteredChallenges;
};

export default useGetChallengeFilterByReduxStoreId;
