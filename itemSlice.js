import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...action, action.payload.item];
    },
    removeItem: (state) => {
      const { id } = action.payload
      state.items.filter(user => user.id !== id)
    },
  },
});

export const { addItem, removeItem } = itemSlice.actions;

export default itemSlice.reducer;
