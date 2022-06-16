import {ChallengeItemType} from '../types/challengeItem';
import {useGetQueryState} from './useQueryClientStore';

const useGetDetailChallenge = (
  challengeId: number,
): ChallengeItemType | undefined => {
  const challengeList = useGetQueryState<ChallengeItemType[]>([
    'challengeList',
    undefined,
  ]);

  return challengeList && challengeList.find(({id}) => id === challengeId);
};

export default useGetDetailChallenge;
