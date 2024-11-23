import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './slices/buttonSlice';
import tileReducer from './slices/tileSlice';

const store = configureStore({
  reducer: {
    button: buttonReducer,
    tile: tileReducer,
  },
});

export default store;
