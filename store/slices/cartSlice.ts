import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  children?: JSX.Element | JSX.Element[];
}
[];

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
