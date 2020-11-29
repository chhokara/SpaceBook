import React, { Component } from "react";
import RoomType from "./RoomType";
import SelectButton from "./SelectButton";

export class HCardRightSide extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.roomFloorSelect}>
          <RoomType />
          <div style={styles.roomLocation}>
            <text style={{ fontWeight: "bold" }}>{this.props.floor}</text>
            <text> {this.props.room}</text>
          </div>
          <SelectButton />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "157px",
    marginLeft: "17px",
  },
  roomLocation: {
    marginTop: "15px",
    marginBottom: "15px",
    fontFamily: "Source Serif Pro",
  },
};
export default HCardRightSide;
