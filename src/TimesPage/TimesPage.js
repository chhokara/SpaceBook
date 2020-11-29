import React, { Component } from "react";
import SectionBar from "../DatesPage/SectionBar";
import TimeSlot from "./TimeSlot";
import BookingHeader from "../BookingHeader";
import { Link } from "react-router-dom";

let times = [
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
  "12 AM",
];

export class TimesPage extends Component {
  state = {
    timeFromTo: "Choose a slot",
  };

  labelTimes = (time) => {
    console.log("HELLLOOOO from TimesPage.js");
    // console.log(times[times.indexOf(time) + 1]);
    let timeFromToStr = time + "  to  " + times[times.indexOf(time) + 1];
    this.setState({ timeFromTo: timeFromToStr });
  };

  render() {
    var slots = [];
    times.map((item, index) =>
      slots.push(<TimeSlot time={item} labelTimes={this.labelTimes} />)
    );
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <div
          style={{
            paddingRight: "20px",
            paddingLeft: "40px",
            marginBottom: "100px",
          }}
        >
          {slots}
        </div>
        <div style={styles.nextContainer}>
          <text style={styles.timeFromToText}>{this.state.timeFromTo}</text>
          <Link to="/roomSelectPage">
            <button style={styles.button}>NEXT</button>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  nextContainer: {
    display: "flex",
    width: "300px",
    backgroundColor: "white",
    position: "fixed",
    right: "0",
    bottom: "0",
    height: "83px",
  },
  button: {
    width: "110px",
    height: "48px",
    right: "0",
    marginRight: "10px",
    position: "absolute",
    background: "#1D1D1D",
    border: "2px solid #1D1D1D",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "12px",
    color: "white",
    marginTop: "15px",
  },
  timeFromToText: {
    marginTop: "20px",
    fontFamily: "HKGroteskBold",
    fontSize: "25px",
  },
};

export default TimesPage;
