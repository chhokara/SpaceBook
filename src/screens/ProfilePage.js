import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import ReactRoundedImage from "react-rounded-image";
import BookingHeader from "../components/BookingHeader";

const ProfilePage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(userInfo.image);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user, error } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (!user.name) {
        dispatch(getUserDetails());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, user, dispatch, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ name, email, password, image: pic }));
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setPic(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <BookingHeader title="My Profile" />
      <div className="centered" style={styles.outsideContainer}>
        <div style={styles.upload}>
          <ReactRoundedImage
            image={pic}
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
        {success && <span style={styles.update}>Profile Updated</span>}
        <form onSubmit={submitHandler} style={styles.form}>
          <input
            type="text"
            name="name"
            style={styles.inputStyle}
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            style={styles.inputStyle}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            style={styles.inputStyle}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirm-password"
            style={styles.inputStyle}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            style={{
              ...styles.button,
              background: "#F2FCFB",
              color: "#1D1D1D",
            }}
            type="submit"
          >
            UPDATE PROFILE
          </button>
        </form>
      </div>
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
  update: {
    color: "green",
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

export default ProfilePage;
