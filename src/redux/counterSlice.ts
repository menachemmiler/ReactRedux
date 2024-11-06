import { createSlice } from "@reduxjs/toolkit";

//הגדרת איטרפייס למבנה של הסטייט
interface CounterState {
  count: number;
}

//ההגדרה של הסטייט
const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

//ייצוא הפעולות של הסטייט
export const { decrement, increment, reset } = counterSlice.actions;

// ייצוא ה-reducer לשימוש ב-store
// export default counterSlice;
