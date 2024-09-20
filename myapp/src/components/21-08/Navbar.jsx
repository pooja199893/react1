import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const router = useNavigate();

  function redirectToHome() {
    // alert("Hi from function");
    router("/");
  }
  function redirectToLogin() {
    router("/login");
  }
  function redirectToRegister() {
    router("/register");
  }
  function redirectToCounter(){
    router("/counter")
  }
  function redirectToUseEffect1(){
    router("/useeffect-1")
  }
  function redirectToUseEffect2(){
    router("/useeffect-2")
  }
  function redirectToUseEffect3(){
    router("/useeffect-3")
  }
  function redirectToUseEffect4(){
    router("/useeffect-4")
  }
  function redirectToUseParams(){
    router("/product/:id")
  }
   function redirectToPropDrilling(){
    router("/props")
   }
   function redirectToMapping(){
    router("/mapping")
   }
   function redirectToMapping2(){
    router("/mapping2")
   }
    function redirectToTerneryOperator(){
      router("/ternery-operator")
    }
    function redirectToStyledComponets(){
      router("/styled-components")
    }
    function redirectToTodo(){
      router ("/todo")
    }
    function redirectToProduct(){
      router("all-products")
    }
  return (
    <div className="parentDiv">
      <h1 onClick={redirectToHome}>Home</h1>
      <h1 onClick={redirectToLogin}>Login</h1>
      <h1 onClick={redirectToRegister}>Register</h1>
      <h1 onClick={redirectToCounter}>Counter</h1>
      <h1 onClick={redirectToUseEffect1}>UseEffect1</h1>
      <h1 onClick={redirectToUseEffect2}>UseEffect2</h1>
      <h1 onClick={redirectToUseEffect3}>UseEffect3</h1>
      <h1 onClick={redirectToUseEffect4}>UseEffect4</h1>
      <h1 onClick={redirectToUseParams}>UseParams</h1>
      <h1 onClick={redirectToPropDrilling}>PropDrilling</h1>
      <h1 onClick={redirectToMapping}>Mapping</h1>
      <h1 onClick={redirectToMapping2}>Mapping2</h1>
      <h1 onClick={redirectToTerneryOperator}>Ternary</h1>
      <h1 onClick={redirectToStyledComponets}>Styled</h1>
      <h1 onClick={redirectToTodo}>TODO</h1>
      <h1 onClick={redirectToProduct}>PRODUCT</h1>
    </div>
  );
}
export default Navbar;