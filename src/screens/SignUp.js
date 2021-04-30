import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import spaceBookLogo from "../assets/spaceBookLogo.jpg";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const userInfo = userRegister.userInfo;
  const error = userRegister.error;

  useEffect(() => {
    console.log(name);

    if (userInfo) {
      history.push("/home");
    }
  }, [history, userInfo]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      dispatch(register(name, email, password));
    } else {
      setMessage("Passwords do not match");
    }
  };
  return (
    <div className="centered" style={styles.outsideContainer}>
      <img src={spaceBookLogo} alt="logo" />
      {message && <span style={styles.errorMessage}>{message}</span>}
      {error && (
        <span style={styles.errorMessage}>
          Please enter all fields correctly
        </span>
      )}
      <input
        type="text"
        name="name"
        style={styles.inputStyle}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
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
      <input
        type="password"
        name="confirm-password"
        style={styles.inputStyle}
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        style={{ ...styles.button, background: "#F2FCFB", color: "#1D1D1D" }}
        onClick={onSubmit}
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
  errorMessage: {
    color: "red",
  },
};

export default SignUp;
