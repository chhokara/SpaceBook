import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/Fear_remedy.png";

export class BookingHeader extends Component {
  render() {
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
        <h1 style={styles.headerStyle}>{this.props.title}</h1>
        <ReactRoundedImage
          image={MyPhoto}
          roundedColor="#321124"
          imageWidth="60"
          imageHeight="60"
          roundedSize="6"
          hoverColor="#DD1144"
        />
      </div>
    );
  }
}

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
