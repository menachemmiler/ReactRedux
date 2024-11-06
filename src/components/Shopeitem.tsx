import { useDispatch } from "react-redux";
import Cart from "../types/Cart";
import { addProduct, incProduct } from "../redux/CartSlice";

interface Props {
  cart: Cart;
}

const Shopeitem = ({ cart }: Props) => {
  console.log({ cart });

  const dispatch = useDispatch(); //מחלקה שמאפשרת לבצע שינויים בסטייט

  return (
    <div className={`shopeitem`}>
      <h1>{cart.name}</h1>
      <h2>price: {cart.price}</h2>
      <h5>count: {cart.quantity}</h5>
      <button
        onClick={() => {
          dispatch(addProduct({ id: cart.id }));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(incProduct({ id: cart.id }));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Shopeitem;
