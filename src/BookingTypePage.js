import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/Fear_remedy.png";

export class BookingTypePage extends Component {
  render() {
    return (
      <div className="centered container">
        <div style={{ display: "flex" }}>
          <h1 style={styles.headerStyle}>I am looking for</h1>
          <ReactRoundedImage
            image={MyPhoto}
            roundedColor="#321124"
            imageWidth="60"
            imageHeight="60"
            roundedSize="6"
            hoverColor="#DD1144"
          />
        </div>

        <button style={{ ...styles.button, background: "#19C1B7" }}>
          INDIVIDUAL WORKSPACE
        </button>
        <button style={{ ...styles.button, background: "#19C1B7" }}>
          TEAM MEETING ROOM
        </button>
      </div>
    );
  }
}

const styles = {
  button: {
    width: "294px",
    height: "88px",
    left: "27px",
    top: "202px",
    background: "#1D1D1D",
    border: "2px solid #19C1B7",
    borderRadius: "4px",
    fontSize: "14px",
    fontFamily: "Helvetica",
    color: "white",
    marginTop: "10px",
    radius: "8px",
  },
  inputStyle: {
    // flex: '10',
    padding: "5px",
    width: "417px",
    height: "48px",
    left: "511px",
    top: "636px",
    marginBottom: "10px",
    background: "#F2F2F2",
    border: "2px",
  },
  headerStyle: {
    paddingTop: "10px",
    fontFamily: "Source Serif Pro",
    height: "535px",
    width: "255px",

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "40px",
    lineHeight: "110%",
    /* or 35px */

    letterSpacing: "-0.05em",
  },
};

export default BookingTypePage;
