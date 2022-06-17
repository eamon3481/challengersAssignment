import {configureStore} from '@reduxjs/toolkit';

import attendChallengeReducer from '../redux/attendChallenges';
import cartItemsReducer from '../redux/cartItems';
import challengeReducer from '../redux/challenges';

export const store = configureStore({
  reducer: {
    challenges: challengeReducer,
    cartItems: cartItemsReducer,
    attendChallenges: attendChallengeReducer,
  },
});

export type storeKEY = keyof RootState;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
