import {useStore} from 'react-redux';

import {RootState} from '../store';
import {ChallengeItemType} from '../types/challengeItem';

const useGetDetailChallenge = (
  challengeId: number,
): ChallengeItemType | undefined => {
  const store = useStore<RootState>();
  const {challenges} = store.getState();

  return challenges.value[challengeId];
};

export default useGetDetailChallenge;
