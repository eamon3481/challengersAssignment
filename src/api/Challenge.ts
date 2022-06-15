import {CategoryType, ChallengeItemType} from '../types/challengeItem';
import Request from './Request';
type ChallengeResponse = {
  data: {
    challenges: ChallengeItemType[];
  };
};
export default class Challenge extends Request {
  reqChallengeList = (
    category?: CategoryType,
    offset?: number,
    limit?: number,
  ) => {
    let queryString = '?';
    if (category) {
      queryString += `category=${category}`;
    }
    if (offset) {
      queryString += `offset=${offset}`;
    }
    if (limit) {
      queryString += `limit=${limit}`;
    }
    const query = queryString !== '?' ? queryString : '';
    return this.req.get<ChallengeResponse>('/api/sample-challenges' + query);
  };
}
