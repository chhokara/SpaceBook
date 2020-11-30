import React, { Component } from "react";
import Display from "./CardComponent/Slider";
import BookingHeader from "./BookingHeader";
import { Link } from "react-router-dom";

export class Scroll extends Component {
  render() {
    return (
      <div>
        <BookingHeader title="My Bookings" />
        <div style={styles.sliderAndButtonDiv}>
          <Display />
          <Link to="/datesPage">
            <button style={styles.button}>+ NEW BOOKING</button>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    width: "364px",
    height: "58px",
    left: "27px",
    top: "12px",
    background: "#1D1D1D",
    border: "2px solid #1D1D1D",
    borderRadius: "16px",
    fontSize: "14px",
    fontFamily: "Helvetica",
    color: "white",
    marginTop: "10px",
    radius: "8px",
  },
  sliderAndButtonDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "80px",
  },
};

export default Scroll;
