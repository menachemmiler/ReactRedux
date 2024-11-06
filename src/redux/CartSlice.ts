import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartState from "../types/CartState";
import { products, totalCart } from "../utils/shope";
import Cart from "../types/Cart";

//כל המוצרים של החנות
const shopeProducts: Cart[] = products;

//ההגדרה של הסטייט
//הסטייט מייצג עגלת קניות
const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "shope",
  initialState,
  reducers: {
    addProduct: (state, actions: PayloadAction<{ id: string }>) => {
      const itemId = actions.payload.id;
      const newItem: Cart | undefined = shopeProducts.find(
        (i) => i.id == itemId
      );
      if (!newItem) return;
      const ifExist = state.items.find((i) => i.id == itemId);
      if (ifExist) {
        ifExist.quantity += 1;
      } else {
        state.items.push(newItem);
      }
      state.total = totalCart(state.items);
    },
    incProduct: (state, actions: PayloadAction<{ id: string }>) => {
      const itemId = actions.payload.id;
      const ifExist = state.items.find((i) => i.id == itemId);
      if (ifExist) {
        ifExist.quantity > 1
          ? (ifExist.quantity -= 1)
          : (state.items = state.items.filter((i) => i.id !== itemId));
      } else {
        alert("this item is alredy not in your cart!");
      }
      state.total = totalCart(state.items);
    },
  },
});

//ייצוא הפעולות של הסטייט
export const { addProduct, incProduct } = cartSlice.actions;

// ייצוא ה-reducer לשימוש ב-store
// export default counterSlice;
