import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface challengeIds {
  value: number[];
}

const initialState: challengeIds = {
  value: [],
};

export const attendChallengeSlice = createSlice({
  name: 'attendChallenges',
  initialState,
  reducers: {
    addAttendChallenges: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload);
    },
    removeAttendChallenge: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(id => id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addAttendChallenges, removeAttendChallenge} =
  attendChallengeSlice.actions;

export default attendChallengeSlice.reducer;
