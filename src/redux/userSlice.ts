import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//הגדרת איטרפייס למבנה של הסטייט
interface UserState {
  name: string;
  password: number;
}

//ההגדרה של הסטייט
const initialState: UserState = {
  name: "user name",
  password: 1234,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNamePassword: (state, actions: PayloadAction<UserState>) => {
      state.name = actions.payload.name;
      state.password = actions.payload.password;
    },
  },
});

//ייצוא הפעולות של הסטייט
export const { setNamePassword } = userSlice.actions;

// ייצוא ה-reducer לשימוש ב-store
// export default counterSlice;
