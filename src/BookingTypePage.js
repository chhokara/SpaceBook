import React, { Component } from "react";
import BookingHeader from "./BookingHeader";

export class BookingTypePage extends Component {
  render() {
    return (
      <div>
        <BookingHeader />
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
    color: "white",
    marginTop: "10px",
    radius: "8px",
  },
};

export default BookingTypePage;
