import Cart from "../types/Cart";

interface Props {
  cart: Cart;
}

const Cartitem = ({ cart }: Props) => {
  return (
    <div className={`cartitem`}>
      <h1>{cart.name}</h1>
      <h2>price: {cart.price}</h2>
      <h5>count: {cart.quantity}</h5>
    </div>
  );
};

export default Cartitem;
