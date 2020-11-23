import React, { Component } from "react";
import SectionBar from "../DatesPage/SectionBar";
import TimeSlot from "./TimeSlot";
import BookingHeader from "../BookingHeader";

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
  render() {
    var slots = [];
    times.map((item, index) => slots.push(<TimeSlot time={item} />));
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <div style={{ paddingRight: "20px", paddingLeft: "40px" }}>{slots}</div>
      </div>
    );
  }
}

export default TimesPage;
