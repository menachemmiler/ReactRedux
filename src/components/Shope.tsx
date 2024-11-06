import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { products } from "../utils/shope";
import { addProduct } from "../redux/CartSlice";

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
            <div key={t.id} className={`item ${t.name}`}>
              <h1>{t.name}</h1>
              <h2>price: {t.price}</h2>
              <h5>count: {t.quantity}</h5>
              <button
                onClick={() => {
                  dispatch(addProduct({ id: t.id }));
                }}
              >
                הוסף לסל
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h1 className="title">הסל שלך</h1>
        <div className="main">
          {items.map((t) => (
            <div key={t.id} className={`item`}>
              <h1>{t.name}</h1>
              <h2>price: {t.price}</h2>
              <h5>count: {t.quantity}</h5>
            </div>
          ))}
        </div>
        <h3>total: {total}</h3>
      </div>
    </div>
  );
};

export default Shope;
