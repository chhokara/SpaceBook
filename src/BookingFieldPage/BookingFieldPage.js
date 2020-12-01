import React, { Component } from "react";
import BookingHeader from "../BookingHeader";
import SectionBar from "../DatesPage/SectionBar";
import FieldSection from "./FieldSection";
import Buttons from "./Buttons";

export class BookingPage extends Component {
  render() {
    return (
      <div>
        <BookingHeader title="Book a room" />
        <SectionBar />
        <FieldSection />
        <Buttons />
      </div>
    );
  }
}

const styles = {
  formatting: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default BookingPage;
