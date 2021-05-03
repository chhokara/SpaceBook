import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import spaceBookLogo from "../assets/spaceBookLogo.jpg";
import { login } from "../actions/userActions";
import { Link } from "react-router-dom";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin.userInfo;
  const error = userLogin.error;

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      history.push("/home");
    }
  }, [location, history, userInfo]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="centered" style={styles.outsideContainer}>
      <img src={spaceBookLogo} alt="logo" />
      {error && <span style={styles.errorMessage}>{error}</span>}
      <form onSubmit={onSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          style={styles.inputStyle}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          style={styles.inputStyle}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button}>LOGIN</button>
      </form>

      <Link to="/signup">
        <button
          style={{ ...styles.button, background: "#F2FCFB", color: "#1D1D1D" }}
        >
          SIGN UP
        </button>
      </Link>
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
  errorMessage: {
    color: "red",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Login;
