import React, { Component } from "react";

export class BookingInfo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <text style={{ paddingBottom: "10px" }}>Jen Wong</text>
        <text>{this.props.space}</text>
        <text>
          {this.props.timeFrom} - {this.props.timeTo}
        </text>
        <text style={{ paddingTop: "10px" }}>
          {this.props.month} {this.props.dayOfMonth}
        </text>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Source Serif Pro",
    fontSize: "24px",
  },
};

export default BookingInfo;
