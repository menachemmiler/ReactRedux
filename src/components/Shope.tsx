import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { products } from "../utils/shope";
import Shopeitem from "./Shopeitem";
import Cartitem from "./Cartitem";

const Shope = () => {
  const { items, total } = useSelector((state: RootState) => state.shope);

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
        <h3>total: {total}</h3>
      </div>
    </div>
  );
};

export default Shope;
