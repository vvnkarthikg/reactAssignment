import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonClicked: false, // Initial state for button click
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    updateButtonClicked: (state, action) => {
      state.buttonClicked = action.payload; // Update the buttonClicked state
    },
  },
});

export const { updateButtonClicked } = buttonSlice.actions;
export default buttonSlice.reducer;
