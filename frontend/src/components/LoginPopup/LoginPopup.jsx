import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Log in");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
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
            <input type="text" placeholder="Your name " required />
          )}
          <input type="email" placeholder="Your email " required />
          <input type="password" placeholder="Password " required />
        </div>
        <button>{currState === "Sign up" ? "Create account" : "Log in"}</button>
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
