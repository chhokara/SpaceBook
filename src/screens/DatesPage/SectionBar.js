import React, { Component } from "react";
import arrowRight from "../../assets/arrowRight.svg";

export class SectionBar extends Component {
  render() {
    return (
      <div style={{ paddingLeft: "30px", zoom: "1.15" }}>
        <div style={styles.textStyle}>
          <text>Select a time</text>
          <img src={arrowRight} style={styles.arrowStyle} />
          <text>Select a space</text>
          <img src={arrowRight} style={styles.arrowStyle} />
          <text>Confirm</text>
        </div>
      </div>
    );
  }
}

const styles = {
  outsideContainer: {
    display: "flex",
    flexDirection: "row",
    width: "299px",
  },
  textStyle: {
    display: "flex",
    fontSize: "9px",
    height: "20px",
    // justifyContent: 'center',
    alignItems: "center",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    marginBottom: "20px",
    textTransform: "uppercase",
    color: "#19C1B7",
  },
  arrowStyle: {
    width: "10px",
    marginLeft: "5px",
    marginRight: "5px",
  },
};

export default SectionBar;
