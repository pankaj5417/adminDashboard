import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import "./signup.css";
export const SignUp = () => {
  const [signup, setSignup] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };
  console.log(signup);
  useEffect(() => {});

  const signupUser = () => {
    fetch("http://localhost:8000/api/userData/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    })
      .then((res) => {
        console.log("userpostdat", res);
        return res.json();
      })
      .then((user) => {
        console.log(user);
        setSignup(user);
      }).catch(err=>{
        console.log(err)
    })
  };
  return (
    <>
      <div className="singup">
        <TextField
          variant="standard"
          placeholder="Enter username"
          className="inputBox"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <br />
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
          placeholder="Enter mobile number"
          className="inputBox"
          type="number"
          name="mobile"
          onChange={handleChange}
        />
        <br />
        <TextField
          variant="standard"
          placeholder="Enter password"
          className="inputBox"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <TextField
          variant="standard"
          placeholder="Enter role"
          className="inputBox"
          type="text"
          name="role"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#ff5722",
            height: "50px",
            fontWeight: "600",
          }}
          onClick={signupUser}
          className="singupButton"
        >
          Sign Up
        </Button>
      </div>
    </>
  );
};
