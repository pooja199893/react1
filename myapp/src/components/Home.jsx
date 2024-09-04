// function Home() {
//     return <div>Home</div>;
//   }
  
//   export default Home;

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function Home() {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state, "state");

  function Increment() {
    dispatch({ type: "INCREMENT" });

  }
  function Decrement() {
    dispatch({ type: "DECREMENT" });
  }
  return (
    <div className="counter">
      Home <h1>counter : {state?.counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default Home;