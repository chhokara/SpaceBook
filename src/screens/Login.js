import React, { Component } from "react";
import spaceBookLogo from "../assets/spaceBookLogo.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="centered" style={styles.outsideContainer}>
      <img src={spaceBookLogo} />
      <input
        type="text"
        name="email"
        style={styles.inputStyle}
        placeholder="Enter Email"
      />
      <input
        type="password"
        name="password"
        style={styles.inputStyle}
        placeholder="Enter Password"
      />
      <Link to="/home">
        <button style={styles.button}>LOGIN</button>
      </Link>
      <button
        style={{ ...styles.button, background: "#F2FCFB", color: "#1D1D1D" }}
      >
        SIGN UP
      </button>
    </div>
  );
};

const styles = {
  button: {
    width: "202px",
    height: "48px",
    background: "#1D1D1D",
    border: "2px solid #1D1D1D",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "12px",
    color: "white",
    marginTop: "10px",
  },
  inputStyle: {
    padding: "15px",
    width: "80%",
    maxWidth: "500px",
    height: "48px",
    marginBottom: "10px",
    background: "#F2F2F2",
    border: "2px solid #E0E0E0",
    borderRadius: "6px",
    fontFamily: "HKGrotesk",
    fontSize: "15px",
    letterSpacing: "0.07em",
    background: "white",
  },
};

export default Login;
