// function Login() {
//     return <h1>Login</h1>;
//   }
  
//   export default Login;

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const router = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name, "check");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  // localhost:8000/api/v1/auth/register

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      userData.email &&
      userData.password 
    ) {
      try {
        // const response = await axios.post(
        //   "http://localhost:8000/api/v1/auth/register",
        //   { userData }
        // );
        const response = {
          data: { success: true, message: "Login succesfully completed." },
        };
        if (response.data.success) {
          // console.log(response);
          // alert(response.data.message);
          toast.success(response.data.message);
          router("/login");
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    } else {
      toast.error("All fields are required.");
    }
  }

  // var myobject = {};
  // myobject.hi = "hii";
  // myobject["event.target.name"] = event.target.value
  // {[event.target.name] : event.target.value}

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Email</label>
        <br />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Type your email.."
          name="email"
          required
        />
        <br />
        <label>Password </label>
        <br />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Type your password.."
          name="password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;