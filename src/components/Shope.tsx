import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { products } from "../utils/shope";
import { addProduct } from "../redux/CartSlice";

const Shope = () => {
  const { items, total } = useSelector((state: RootState) => state.shope);

  const dispatch = useDispatch(); //מחלקה שמאפשרת לבצע שינויים בסטייט

  return (
    <div className="todos">
      <div>
        <h1>המוצרים בחנות</h1>
        <ul>
          {products.map((t) => (
            <li key={t.id} className={`${t.name}`}>
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
            </li>
          ))}
        </ul>
      </div>

      <h1>הסל שלך</h1>
      <ul>
        {items.map((t) => (
          <li key={t.id} className={`${t.name}`}>
            <h1>{t.name}</h1>
            <h2>price: {t.price}</h2>
            <h5>count: {t.quantity}</h5>
          </li>
        ))}
      </ul>
      <h3>total: {total}</h3>
    </div>
  );
};

export default Shope;
