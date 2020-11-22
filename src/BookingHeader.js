import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/Fear_remedy.png";

export class BookingHeader extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default BookingHeader;
