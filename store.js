import { configureStore } from '@reduxjs/toolkit';

import itemReducer from '../slices/itemReducer';

const store = configureStore({
  reducer: {
    itemReducer,
  },
});

export default store;
