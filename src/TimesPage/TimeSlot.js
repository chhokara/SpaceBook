import React, { Component } from "react";

export class TimeSlot extends Component {
  render() {
    return (
      <div style={styles.outsideContainer}>
        <div style={styles.timeLabel}>{this.props.time}</div>
        <div style={styles.rectangle}></div>
      </div>
    );
  }
}

const styles = {
  outsideContainer: {
    display: "flex",
    flexDirection: "row",
  },
  timeLabel: {
    fontSize: "10px",
    fontWeight: "bold",
    flexBasis: "30px", //min width
    //flexGrow: 1,
  },
  rectangle: {
    flexGrow: 1,
    height: "8vh",
    background: "#19C1B7",
    opacity: "0.2",
    borderBottom: "2px solid #1D1D1D",
    borderTop: "2px solid #1D1D1D",
  },
};

export default TimeSlot;
