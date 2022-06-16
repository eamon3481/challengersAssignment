import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CartID {
  value: number[];
}

const initialState: CartID = {
  value: [],
};

export const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addCartItem} = cartItemSlice.actions;

export default cartItemSlice.reducer;
