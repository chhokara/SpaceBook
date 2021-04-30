import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactRoundedImage from "react-rounded-image";

export const BookingHeader = ({ title }) => {
  const [pic, setPic] = useState("Fear_remedy.png");

  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin.userInfo;

  useEffect(() => {
    if (userInfo) {
      setPic(userInfo.image);
      console.log(pic);
    }
  }, [userInfo, pic]);
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
      <ReactRoundedImage
        image={require("../images/" + pic).default}
        roundedColor="#321124"
        imageWidth="60"
        imageHeight="60"
        roundedSize="6"
        hoverColor="#DD1144"
      />
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
