import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import spaceBookLogo from "../assets/spaceBookLogo.jpg";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import ReactRoundedImage from "react-rounded-image";
import MyImage from "../images/profile.png";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(MyImage);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const userInfo = userRegister.userInfo;
  const error = userRegister.error;

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [history, userInfo]);

  const handleUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password, file));
    }
  };
  return (
    <div className="centered" style={styles.outsideContainer}>
      <img src={spaceBookLogo} alt="logo" />
      <div style={styles.upload}>
        <ReactRoundedImage
          image={file}
          roundedColor="#321124"
          imageWidth="200"
          imageHeight="200"
          roundedSize="6"
          hoverColor="#DD1144"
        />
        <label style={styles.customInput}>
          <input
            type="file"
            style={styles.uploadFile}
            onChange={handleUpload}
          />
          UPLOAD IMAGE
        </label>
      </div>

      {message && <span style={styles.errorMessage}>{message}</span>}
      {error && <span style={styles.errorMessage}>{error}</span>}

      <form onSubmit={onSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          style={styles.inputStyle}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          name="confirm-password"
          style={styles.inputStyle}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          style={{ ...styles.button, background: "#F2FCFB", color: "#1D1D1D" }}
        >
          SIGN UP
        </button>
      </form>
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
    width: "100%",
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
  upload: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  uploadFile: {
    margin: "10px",
    display: "none",
  },
  customInput: {
    border: "1px solid #ccc",
    display: "inline-block",
    padding: "6px 12px",
    cursor: "pointer",
    width: "202px",
    height: "48px",
    background: "#1D1D1D",
    border: "2px solid #1D1D1D",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "12px",
    color: "white",
    marginTop: "10px",
    textAlign: "center",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default SignUp;
