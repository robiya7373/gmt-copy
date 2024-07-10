import { createSlice } from "@reduxjs/toolkit";

const Ctravleniya = createSlice({
  name: "logg",
  initialState: {
    data: JSON.parse(localStorage.getItem("logg")) || [],
  },
  reducers: {
    setToCtravleniya(state, action) {
      const existingItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex === -1) {
        state.data = [...state.data, { ...action.payload, srav: true }];
      } else {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      }

      localStorage.setItem("logg", JSON.stringify(state.data));
    },
  },
});

export const { setToCtravleniya } = Ctravleniya.actions;
export const SelectCtravleniya = (state) => state.strav.data;
export default Ctravleniya.reducer;