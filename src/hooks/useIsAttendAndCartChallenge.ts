import {useSelector} from 'react-redux';

import {RootState} from '../store';

const useIsAttendAndCartChallenge = (challengeId: number) => {
  const isAttend = useSelector<RootState, boolean>(state =>
    state.attendChallenges.value.includes(challengeId),
  );

  const isCart = useSelector<RootState, boolean>(state =>
    state.cartItems.value.includes(challengeId),
  );
  return {isAttend, isCart};
};

export default useIsAttendAndCartChallenge;
