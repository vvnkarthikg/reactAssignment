import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tileSelected: '', // Initial state for tile selection (empty string)
};

const tileSlice = createSlice({
  name: 'tile',
  initialState,
  reducers: {
    updateTileSelected: (state, action) => {
      state.tileSelected = action.payload; // Update the tileSelected state
    },
  },
});

export const { updateTileSelected } = tileSlice.actions;
export default tileSlice.reducer;
