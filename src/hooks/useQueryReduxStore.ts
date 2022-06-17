import {useQuery} from 'react-query';
import {useDispatch} from 'react-redux';

import {challengeAPI} from '../api';
import {addChallengeMap} from '../redux/challenges';
import {CategoryType, ChallengeItemType} from '../types/challengeItem';

export function normalizeChallengeList(challengeList: ChallengeItemType[]) {
  return challengeList.reduce<{
    [challengeId: number]: ChallengeItemType;
  }>((summary, item) => {
    const {id} = item;
    summary[id] = item;

    return summary;
  }, {});
}

const useQueryReduxStore = (category: CategoryType | undefined) => {
  const dispatch = useDispatch();
  const {data} = useQuery<ChallengeItemType[]>(
    ['challengeList', category],
    () =>
      challengeAPI.reqChallengeList(category).then(res => {
        dispatch(
          addChallengeMap(normalizeChallengeList(res.data.data.challenges)),
        );
        return res.data.data.challenges;
      }),
  );

  if (!data) {
    return undefined;
  }

  return data;
};

export default useQueryReduxStore;
