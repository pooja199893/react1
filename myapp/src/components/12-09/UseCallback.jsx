import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [counter, setCounter] = useState(1); // 2
  const [todos, setTodos] = useState([]);
//    const AddNewTodo = () => {
//      setTodos([...todos, "My new todo."]);
//   };
    const AddNewTodo = useCallback(() => {
      setTodos([...todos, "My new todo."]);
    }, [todos]);
  
  return (
    <>
     <div><h1>USE-CALLBACK</h1>
      <h1> counter = {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <Todos todos={todos} addTodo={AddNewTodo} />
    </div>
    </>
  );
};

export default UseCallback;