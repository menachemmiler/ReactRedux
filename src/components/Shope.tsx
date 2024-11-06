import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { products } from "../utils/shope";
import Shopeitem from "./Shopeitem";
import Cartitem from "./Cartitem";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/CartSlice";

const Shope = () => {
  const { items, total } = useSelector((state: RootState) => state.shope);

  const dispatch = useDispatch(); //מחלקה שמאפשרת לבצע שינויים בסטייט

  return (
    <div className="shope">
      <div className="products">
        <div className="title">
          <h1>המוצרים בחנות</h1>
        </div>
        <div className="main">
          {products.map((t) => (
            <Shopeitem key={t.id} cart={t} />
          ))}
        </div>
      </div>

      <div className="cart">
        <h1 className="title">הסל שלך</h1>
        <div className="main">
          {items.map((t) => (
            <Cartitem key={t.id} cart={t} />
          ))}
        </div>
      </div>

      <div className="buttom">
        <h3>total: {total}</h3>
        <button onClick={() => {dispatch(clearCart())}}>clear cart</button>
      </div>
    </div>
  );
};

export default Shope;
