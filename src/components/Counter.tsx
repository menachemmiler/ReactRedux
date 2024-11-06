import { RootState } from "../redux/store";
import { decrement, increment, reset } from "../redux/counterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>counter</h1>
      <h2>{count}</h2>
      <div className="space-between">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
