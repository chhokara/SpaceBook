import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import MyImage from "../images/Fear_remedy.png";

export const BookingHeader = ({ title, history }) => {
  const [pic, setPic] = useState(MyImage);

  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin.userInfo;

  useEffect(() => {
    if (userInfo) {
      setPic(userInfo.image);
    }
  }, [userInfo]);

  const clickHandler = () => {
    history.push("/profile");
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
};

export default BookingHeader;
