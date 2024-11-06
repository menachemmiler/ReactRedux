import Cart from "../types/Cart";

//list of all products in the shope
export const products: Cart[] = [
  {
    id: "1",
    name: "bread",
    price: 7,
    quantity: 1,
  },
  {
    id: "2",
    name: "cheese",
    price: 8,
    quantity: 1,
  },
  {
    id: "3",
    name: "milk",
    price: 6,
    quantity: 1,
  },
  {
    id: "4",
    name: "water",
    price: 3,
    quantity: 1,
  },
  {
    id: "5",
    name: "csffsd",
    price: 3,
    quantity: 1,
  },
  {
    id: "6",
    name: "ffff",
    price: 3,
    quantity: 1,
  },
  {
    id: "7",
    name: "rrrr",
    price: 3,
    quantity: 1,
  },
];

export const totalCart = (items: Cart[]): number => {
  let sumAll = items.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  if (!sumAll) {
    console.log("problem in totalCart!");
  }
  return sumAll;
};
