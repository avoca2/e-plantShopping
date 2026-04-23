import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0, totalAmount: 0 };

const recalc = (state) => {
  state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
  state.totalAmount = state.items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) existing.quantity++;
      else state.items.push({ ...action.payload, quantity: 1 });
      recalc(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      recalc(state);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
      recalc(state);
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
      else if (item && item.quantity === 1) state.items = state.items.filter(i => i.id !== action.payload);
      recalc(state);
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
