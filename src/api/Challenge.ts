import {ChallengeItemType} from '../types/challengeItem';
import Request from './Request';
type ChallengeResponse = {
  data: {
    challenges: ChallengeItemType[];
  };
};
export default class Challenge extends Request {
  reqChallengeList = () =>
    this.req.get<ChallengeResponse>('/api/sample-challenges');
}
