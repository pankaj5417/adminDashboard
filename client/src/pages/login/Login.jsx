import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { URL } from "../../url";

import "./login.css";
export const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [userDetails, setUserDetails] = useState();
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  console.log(login);
  useEffect(() => {}, []);
  const signinUser = () => {
    fetch(`${URL}/userData/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => {
        console.log("userpostdata", res);
        return res.json();
      })
      .then((user) => {
        console.log(user);
        setUserDetails(user);
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("loginStatus",JSON.stringify({isLogin:true}))
        navigate("/home")
      })
      .catch(err=>{
        console.log(err)
    })
  };
  const forgotPassword = () => {
    fetch(`${URL}/userData/forgotPassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => {
        console.log("userpostdata", res);
        return res.json();
      })
      .then((user) => {
          console.log(user)

      })
      .catch(err=>{
          console.log(err)
      })
  };

  return (
    <>
      <div className="login">
        <TextField
          variant="standard"
          placeholder="Enter email"
          className="inputBox"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          variant="standard"
          placeholder="Enter Password"
          className="inputBox"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />

        <Button
          variant="contained"
          style={{
            backgroundColor: "#ff5722",
            height: "50px",
            fontWeight: "600",
          }}
          onClick={signinUser}
          className="loginButton"
        >
          Login
        </Button>
           <p style={{textAlign:"center"}}>or</p>
        <Button
          className="forgotButton"
          variant="outlined"
          onClick={forgotPassword}
        >
          Forgot password
        </Button>
      </div>
    </>
  );
};
