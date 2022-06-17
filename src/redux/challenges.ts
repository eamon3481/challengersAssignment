import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ChallengeItemType} from '../types/challengeItem';

export interface ChallengeMapType {
  value: ChallengeMap;
}
export type ChallengeMap = {[challengeId: number]: ChallengeItemType};
const initialState: ChallengeMapType = {
  value: {},
};

export const challengeMapSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    addChallengeMap: (state, action: PayloadAction<ChallengeMap>) => {
      state.value = {...state.value, ...action.payload};
    },
    removeChallengeMap: (state, action: PayloadAction<number>) => {
      delete state.value[action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addChallengeMap, removeChallengeMap} = challengeMapSlice.actions;

export default challengeMapSlice.reducer;
