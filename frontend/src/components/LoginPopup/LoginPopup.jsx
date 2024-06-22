import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Log in");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogIn = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Log in") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    console.log(currState);
  }, [currState]);

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogIn}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Log in" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              autoComplete="off"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            autoComplete="off"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password "
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Log in"}
        </button>
        {currState === "Sign up" ? (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By checking this box, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        ) : (
          <></>
        )}

        {currState === "Log in" ? (
          <p>
            New to Tomato?{" "}
            <span onClick={() => setCurrState("Sign up")}>
              Create an account
            </span>
          </p>
        ) : (
          <p>
            Already a member?{" "}
            <span onClick={() => setCurrState("Log in")}>Log in</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
