import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import MyImage from "../images/Fear_remedy.png";
import { logout } from "../actions/userActions";

export const BookingHeader = ({ title, history }) => {
  const [pic, setPic] = useState(MyImage);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin.userInfo;

  useEffect(() => {
    if (userInfo) {
      setPic(userInfo.image);
    }
  }, [userInfo]);

  const signOutHandler = () => {
    dispatch(logout());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      {/* <h1 style={styles.headerStyle}>I am looking for...</h1> */}
      <h1 style={styles.headerStyle}>{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <button onClick={signOutHandler} style={styles.button}>
            <i class="fas fa-sign-out-alt" style={styles.icon}></i> SIGN OUT
          </button>
        </Link>
        <Link to="/profile">
          <ReactRoundedImage
            image={pic}
            roundedColor="#321124"
            imageWidth="60"
            imageHeight="60"
            roundedSize="6"
            hoverColor="#DD1144"
          />
        </Link>
      </div>
    </div>
  );
};

const styles = {
  headerStyle: {
    // paddingTop: "100px",
    fontFamily: "Source Serif Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "32px",
    lineHeight: "110%",
    letterSpacing: "-0.05em",
  },
  button: {
    width: "90px",
    height: "38px",
    background: "white",
    border: "2px solid #1D1D1D",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "12px",
    color: "#1D1D1D",
    marginRight: "10px",
  },
};

export default BookingHeader;
