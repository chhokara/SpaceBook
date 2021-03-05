import React, { Component } from "react";

export class TimeSlot extends Component {
  state = {
    opacityDepth: "0.2",
    clicked: true,
  };

  onClick = () => {
    this.setState({ clicked: !this.state.clicked });
    let opacityDepth = this.state.clicked === true ? "0.5" : "0.2";
    this.setState({ opacityDepth: opacityDepth });
    this.props.labelTimes(this.props.time);
    console.log(this.state.clicked);
    console.log(this.state.opacityDepth);
  };
  render() {
    return (
      <div
        style={{ ...styles.outsideContainer, opacity: this.state.opacityDepth }}
        onClick={this.onClick}
      >
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
    flexBasis: "43px", //min width
    // flexGrow: blue,
  },
  rectangle: {
    flexGrow: 1,
    height: "8vh",
    background: "#19C1B7",
    // opacity: 0.2,
    borderBottom: "2px solid #1D1D1D",
    borderTop: "2px solid #1D1D1D",
  },
};

export default TimeSlot;
