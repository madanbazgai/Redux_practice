import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions } from "./store/index";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addTen = () => {
    dispatch(actions.addTen(10));
  };
  const timesTwo = () => {
    dispatch(actions.timesTwo(2));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h4>{counter}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addTen}>Add 10</button>
      <button onClick={timesTwo}>Multiply by 2</button>
    </div>
  );
};
export default App;
