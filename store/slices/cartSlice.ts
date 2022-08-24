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
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const indexToBeRemoved = state.findIndex((item) => item.id === action.payload.id);
      state.splice(indexToBeRemoved, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
