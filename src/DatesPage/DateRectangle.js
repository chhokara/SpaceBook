import React, { Component } from "react";

export class DateRectangle extends Component {
  render() {
    return (
      <div style={styles.rectangle}>
        <div style={styles.insideContainer}>
          <text style={styles.number}>{this.props.dateNum}</text>
          <text style={styles.day}>{this.props.weekDay}</text>
        </div>
      </div>
    );
  }
}

const styles = {
  rectangle: {
    display: "flex",
    // width: '299px',
    width: "90%",
    height: "92px",
    background: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    // justifyContent: 'center'
  },
  insideContainer: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "auto",
    marginLeft: "20px",
  },
  number: {
    fontFamily: "HKGrotesk",
    fontSize: "44px",
    height: "50px",
    width: "auto",
    color: "#19C1B7",
  },
  day: {
    fontFamily: "HKGrotesk",
    fontSize: "10px",
    height: "auto",
    width: "auto",
    color: "#19C1B7",
  },
};

export default DateRectangle;
