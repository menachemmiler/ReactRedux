import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { userSlice } from "./userSlice";
import { toDoSlice } from "./toDosSlice";
import { cartSlice } from "./CartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    todo: toDoSlice.reducer,
    shope: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
